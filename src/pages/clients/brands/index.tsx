import { fetchBrands } from '@/api_request/brands';
import ClientsFilterGroup from '@/components/filters/ClientsFilterGroup/ClientsFilterGroup';
import Layout from '@/components/layout/layout'
import Profile from '@/components/sidepanel/ProfileSidepanel/Profile';
import Sidepanel from '@/components/sidepanel/Sidepanel';
import Spinner from '@/components/spinner/Spinner';
import Table from '@/components/table/Table';
import { breadcrumbLinks, fields, images, searchByFields, tableFields } from '@/utils/page_config/brands';
import React, { useEffect, useRef, useState } from 'react'

export const Brands = () => {
    const [data, setData] = useState<BrandTableDataInterface[]>([]);
    const [filteredData, setFilteredData] = useState<BrandTableDataInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const sidepanelSelectedData = useRef<number | undefined>();

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [])

    const onReloadData = () => {
        setLoading(true);
        fetchData();
    }

    const openSidepanel = (id: number) => {
        sidepanelSelectedData.current = id;
        setIsOpen(true);
    };

    const closeSidepanel = () => setIsOpen(false);


    const fetchData = async () => {
        await fetchBrands((response: any) => {
            const brands: BrandTableDataInterface[] = response?.map((brand: any): BrandTableDataInterface => {
                return {
                    id: brand.id,
                    profile_picture_url: brand.profile_picture_url,
                    name: brand.name,
                    website: brand.website,
                    email: brand.email,
                    team: brand.team,
                    active_campaigns: brand.active_campaigns,
                    active_campaigns_value: brand.active_campaigns_value
                }
            });
            setData(brands);
            setFilteredData(brands);
            setLoading(false);
        }, (error: any) => {
            setLoading(false);
            console.error("Error fetching brands data:", error);
        });
    }

    return (
        <Layout type='default' breadcrumbs={breadcrumbLinks} >
            <ClientsFilterGroup
                data={data}
                searchByFields={searchByFields}
                setFilteredData={setFilteredData}
                csvExportCategory={'brands'}
                onReloadData={onReloadData}
            />
            {loading ?
                <Spinner /> :
                <Table
                    data={data}
                    filteredData={filteredData}
                    useFilteredData={true}
                    fields={fields}
                    tableFields={tableFields}
                    images={images}
                    openSidepanel={openSidepanel}
                />
            }
            <Sidepanel
                isOpen={isOpen}
                closeSidepanel={closeSidepanel}
                href={{
                    pathname: "/clients/brands/profile",
                    query: { id: sidepanelSelectedData.current }
                }}
            >
                <Profile type={'brands'} sidepanelSelectedData={sidepanelSelectedData.current} />
            </Sidepanel>
        </Layout>
    )
}

export default Brands;