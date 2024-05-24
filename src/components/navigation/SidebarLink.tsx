import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './Sidebar.module.scss';

export const SidebarLink = ({
    label,
    pathname,
    image,
}: SidebarLinkProps) => {
    const router = useRouter();

    return (
        <Link
            href={pathname}
            className={router.pathname == pathname ? styles.activeLink : styles.navlinkWrap}
        >
            {image && (
                <Image src={image.img} alt="Icon" width={20} height={20} className={styles.icon} />
            )}
            <div>{label}</div>
        </Link>
    );
};

export default SidebarLink;

