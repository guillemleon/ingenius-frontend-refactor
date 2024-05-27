import { fetchDeals } from '@/api_request/deals';
import Layout from '@/components/layout/layout'
import Spinner from '@/components/spinner/Spinner';
import Table from '@/components/table/Table';
import { breadcrumbLinks, fields, images, tableFields } from '@/utils/page_config/deals';
import React, { useEffect, useState } from 'react'

export const Deals = () => {
    const [data, setData] = useState<DealTableDataInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [])

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
                />
            }
        </Layout>
    )
}

export default Deals;