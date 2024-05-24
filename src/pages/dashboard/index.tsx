import Layout from '@/components/layout/layout'
import React from 'react'

export const Dashboard = () => {
    const breadcrumbLinks = [
        { label: "Home", link: "/" },
        { label: "Dashboard", link: "/dashboard" },
    ];

    return (
        <Layout type='default' breadcrumbs={breadcrumbLinks} >
            Dashboard
        </Layout>
    )
}

export default Dashboard;