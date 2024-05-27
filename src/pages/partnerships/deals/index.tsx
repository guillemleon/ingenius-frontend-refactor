import { fetchDeals } from '@/api_request/deals';
import Layout from '@/components/layout/layout'
import Profile from '@/components/sidepanel/ProfileSidepanel/Profile';
import Sidepanel from '@/components/sidepanel/Sidepanel';
import Spinner from '@/components/spinner/Spinner';
import Table from '@/components/table/Table';
import { breadcrumbLinks, fields, images, tableFields } from '@/utils/page_config/deals';
import React, { useEffect, useRef, useState } from 'react'

export const Deals = () => {
    const [data, setData] = useState<DealTableDataInterface[]>([]);
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
        await fetchDeals((response: any) => {
            const deals: DealTableDataInterface[] = response?.map((deal: any): DealTableDataInterface => {
                return {
                    id: deal.id,
                    brand_image_url: deal.brand_image_url,
                    name: deal.name,
                    brand_name: deal.brand_name,
                    total_campaigns: deal.total_campaigns,
                    contract_value: deal.contract_value,
                    deal_stage_name: deal.deal_stage_name
                }
            });
            setData(deals);
            setLoading(false);
        }, (error: any) => {
            setLoading(false);
            console.error("Error fetching brands data:", error);
        });
    }

    return (
        <Layout type='default' breadcrumbs={breadcrumbLinks} >
            {loading ?
                <Spinner /> :
                <Table
                    data={data}
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
                    pathname: "/partnerships/deals/profile",
                    query: { id: sidepanelSelectedData.current }
                }}
            >
                <Profile type={'deals'} sidepanelSelectedData={sidepanelSelectedData.current} />
            </Sidepanel>
        </Layout>
    )
}

export default Deals;