import Layout from '@/components/layout/layout'
import React from 'react'

export const Brands = () => {
    const breadcrumbLinks = [
        { label: "Clients", link: "/clients/brands" },
        { label: "Brands", link: "/clients/brands", current: true },
    ];

    return (
        <Layout type='default' breadcrumbs={breadcrumbLinks} >
            Brands
        </Layout>
    )
}

export default Brands;