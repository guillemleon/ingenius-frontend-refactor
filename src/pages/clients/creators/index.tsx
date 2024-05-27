import { fetchCreators } from '@/api_request/creators';
import Layout from '@/components/layout/layout'
import Spinner from '@/components/spinner/Spinner';
import Table from '@/components/table/Table';
import { breadcrumbLinks, fields, images, tableFields } from '@/utils/page_config/creators';
import React, { useEffect } from 'react'

export const Creators = () => {
    const [data, setData] = React.useState<CreatorTableDataInterface[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        fetchCreators((response: any) => {
            const creators: CreatorTableDataInterface[] = response?.map((creator: any): CreatorTableDataInterface => {
                return {
                    id: creator.id,
                    profile_picture_url: creator.profile_picture_url,
                    name: creator.name,
                    niche: creator.niche,
                    email: creator.email,
                    active_projects: creator.active_projects,
                    active_projects_value: creator.active_projects_value
                }
            });
            setData(creators);
            setLoading(false);
        }, (error: any) => {
            setLoading(false);
            console.error("Error fetching creators data:", error);
        });
    }, [])

    return (
        <Layout type='default' breadcrumbs={breadcrumbLinks}>
            {loading ?
                <Spinner /> :
                <Table data={data} fields={fields} tableFields={tableFields} images={images} />
            }
        </Layout>
    )
}

export default Creators;