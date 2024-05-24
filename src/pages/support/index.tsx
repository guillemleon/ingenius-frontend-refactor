import Layout from '@/components/layout/layout'
import React from 'react'

export const Support = () => {
    const breadcrumbLinks = [
        { label: "Settings", link: "/support" },
        { label: "Help & Support", link: "/support" },
    ];

    return (
        <Layout type='default' breadcrumbs={breadcrumbLinks} >
            Support
        </Layout>
    )
}

export default Support;