import { fetchBrands } from '@/api_request/brands';
import Layout from '@/components/layout/layout'
import Spinner from '@/components/spinner/Spinner';
import Table from '@/components/table/Table';
import { breadcrumbLinks, fields, images, tableFields } from '@/utils/page_config/brands';
import React, { useEffect, useState } from 'react'

export const Brands = () => {
    const [data, setData] = useState<BrandTableDataInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [])

    const fetchData = async () => {
        await fetchBrands((response: any) => {
            const brands: BrandTableDataInterface[] = response?.map((brand: any): BrandTableDataInterface => {
                return {
                    id: brand.id,
                    profile_picture_url: brand.profile_picture_url,
                    name: brand.name,
                    website: brand.website,
                    email: brand.email,
                    active_campaigns: brand.active_campaigns,
                    active_campaigns_value: brand.active_campaigns_value
                }
            });
            setData(brands);
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
                <Table data={data} fields={fields} tableFields={tableFields} images={images} />
            }
        </Layout>
    )
}

export default Brands;