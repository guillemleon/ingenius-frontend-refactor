import Layout from '@/components/layout/layout'
import React from 'react'

export const Campaigns = () => {
    const breadcrumbLinks = [
        { label: "Partnerships", link: "/partnerships/campaigns" },
        {
            label: "Campaigns",
            link: "/partnerships/campaigns",
            current: true,
        },
    ];

    return (
        <Layout type='default' breadcrumbs={breadcrumbLinks} >
            Campaigns
        </Layout>
    )
}

export default Campaigns;