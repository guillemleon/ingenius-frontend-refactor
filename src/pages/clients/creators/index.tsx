import { fetchCreators } from '@/api_request/creators';
import ClientsFilterGroup from '@/components/filters/ClientsFilterGroup/ClientsFilterGroup';
import Layout from '@/components/layout/layout'
import Profile from '@/components/sidepanel/ProfileSidepanel/Profile';
import Sidepanel from '@/components/sidepanel/Sidepanel';
import Spinner from '@/components/spinner/Spinner';
import Table from '@/components/table/Table';
import { breadcrumbLinks, fields, images, profileConfig, searchByFields, tableFields } from '@/utils/page_config/creators';
import React, { useEffect, useRef, useState } from 'react'

export const Creators = () => {
    const [data, setData] = useState<CreatorTableDataInterface[]>([]);
    const [filteredData, setFilteredData] = useState<CreatorTableDataInterface[]>([]);
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
        fetchCreators((response: any) => {
            const creators: CreatorTableDataInterface[] = response?.map((creator: any): CreatorTableDataInterface => {
                return {
                    id: creator.id,
                    profile_picture_url: creator.profile_picture_url,
                    name: creator.name,
                    niche: creator.niche,
                    team: creator.team,
                    email: creator.email,
                    active_projects: creator.active_projects,
                    active_projects_value: creator.active_projects_value
                }
            });
            setData(creators);
            setFilteredData(creators);
            setLoading(false);
        }, (error: any) => {
            setLoading(false);
            console.error("Error fetching creators data:", error);
        });
    }

    return (
        <Layout type='default' breadcrumbs={breadcrumbLinks}>
            <ClientsFilterGroup
                data={data}
                searchByFields={searchByFields}
                setFilteredData={setFilteredData}
                csvExportCategory={'creators'}
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
                    pathname: "/clients/creators/profile",
                    query: { id: sidepanelSelectedData.current }
                }}
            >
                <Profile
                    type={'creators'}
                    sidepanelSelectedData={sidepanelSelectedData.current}
                    profileConfig={profileConfig}
                />
            </Sidepanel>
        </Layout>
    )
}

export default Creators;