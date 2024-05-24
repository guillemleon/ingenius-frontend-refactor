import Layout from '@/components/layout/layout'
import React from 'react'

export const Settings = () => {
    const breadcrumbLinks = [
        { label: "Settings", link: "/settings" },
        { label: "My Account", link: "/settings" },
    ];

    return (
        <Layout type='default' breadcrumbs={breadcrumbLinks} >
            Settings
        </Layout>
    )
}

export default Settings;