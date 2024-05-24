import Layout from '@/components/layout/layout'
import React from 'react'

export const Projects = () => {
    const breadcrumbLinks = [
        // { label: "Home", link: "/" },
        { label: "Partnerships", link: "/partnerships/projects" },
        {
            label: "Projects",
            link: "/partnerships/projects",
            current: true,
        },
    ];

    return (
        <Layout type='default' breadcrumbs={breadcrumbLinks} >
            Projects
        </Layout>
    )
}

export default Projects;