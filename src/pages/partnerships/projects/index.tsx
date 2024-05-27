import { fetchProjects } from '@/api_request/projects';
import Layout from '@/components/layout/layout'
import Profile from '@/components/sidepanel/ProfileSidepanel/Profile';
import Sidepanel from '@/components/sidepanel/Sidepanel';
import Spinner from '@/components/spinner/Spinner';
import Table from '@/components/table/Table';
import { breadcrumbLinks, fields, images, tableFields } from '@/utils/page_config/projects';
import React, { useEffect, useRef, useState } from 'react'

export const Projects = () => {
    const [data, setData] = useState<ProjectTableDataInterface[]>([]);
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

    const fetchData = () => {
        fetchProjects((response: any) => {
            const projects: ProjectTableDataInterface[] = response?.map((project: any): ProjectTableDataInterface => {
                return {
                    id: project.id,
                    creator_profile_picture: project.creator_profile_picture,
                    creator_name: project.creator_name,
                    name: project.name,
                    campaign_name: project.campaign_name,
                    brand_image_url: project.brand_image_url,
                    brand_name: project.brand_name,
                    contract_value: project.contract_value,
                    project_stage_name: project.project_stage_name
                }
            });
            setData(projects);
            setLoading(false);
        }, (error: any) => {
            setLoading(false);
            console.error("Error fetching projects data:", error);
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
                    pathname: "/partnerships/projects/profile",
                    query: { id: sidepanelSelectedData.current }
                }}
            >
                <Profile type={'campaigns'} sidepanelSelectedData={sidepanelSelectedData.current} />
            </Sidepanel>
        </Layout>
    )
}

export default Projects;