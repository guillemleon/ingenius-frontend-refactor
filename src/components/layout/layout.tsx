import React from 'react'
import Sidebar from '../navigation/Sidebar'
import styles from './Layout.module.scss'
import Breadcrumbs from '../breadcrumb/Breadcrumb'

const Layout = ({
    breadcrumbs,
    children
}: LayoutProps) => {
    return (
        <main>
            <Sidebar />
            <div className={styles.content}>
                <div className={styles.breadcrumbs}>
                    <Breadcrumbs items={breadcrumbs} />
                </div>
                {children}
            </div>
        </main>
    )
}


export default Layout