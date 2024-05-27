import { fetchCampaigns } from '@/api_request/campaigns';
import Layout from '@/components/layout/layout'
import Spinner from '@/components/spinner/Spinner';
import Table from '@/components/table/Table';
import { breadcrumbLinks, fields, images, tableFields } from '@/utils/page_config/campaigns';
import React, { useEffect, useState } from 'react'

export const Campaigns = () => {
    const [data, setData] = useState<CampaignTableDataInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        fetchCampaigns((response: any) => {
            const campaigns: CampaignTableDataInterface[] = response?.map((campaign: any): CampaignTableDataInterface => {
                return {
                    id: campaign.id,
                    brand_image_url: campaign.brand_image_url,
                    name: campaign.name,
                    brand_name: campaign.brand_name,
                    total_projects: campaign.total_projects,
                    contract_value: campaign.contract_value,
                    campaign_stage_name: campaign.campaign_stage_name
                }
            });
            setData(campaigns);
            setLoading(false);
        }, (error: any) => {
            setLoading(false);
            console.error("Error fetching creators data:", error);
        });
    }, [])

    return (
        <Layout type='default' breadcrumbs={breadcrumbLinks} >
            {loading ?
                <Spinner /> :
                <Table
                    data={data}
                    fields={fields}
                    tableFields={tableFields}
                    images={images}
                />
            }
        </Layout>
    )
}

export default Campaigns;