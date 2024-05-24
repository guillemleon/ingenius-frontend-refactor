import Layout from '@/components/layout/layout'
import React from 'react'

export const Creators = () => {
    const breadcrumbLinks = [
        { label: "Clients", link: "/clients/creators" },
        { label: "Creators", link: "/clients/creators", current: true },
    ];

    return (
        <Layout type='default' breadcrumbs={breadcrumbLinks} >
            Creators
        </Layout>
    )
}

export default Creators;