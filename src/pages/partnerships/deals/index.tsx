import Layout from '@/components/layout/layout'
import React from 'react'

export const Deals = () => {
    const breadcrumbLinks = [
        { label: "Partnerships", link: "/partnerships/deals" },
        { label: "Deals", link: "/partnerships/deals", current: true },
    ];

    return (
        <Layout type='default' breadcrumbs={breadcrumbLinks} >
            Deals
        </Layout>
    )
}

export default Deals;