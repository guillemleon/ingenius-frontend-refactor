import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Arrow } from "@/assets/svg/Arrow";
import { useRouter } from 'next/router';
import Revenue from "@/assets/icons/revenue.svg";
import styles from './Sidebar.module.scss';

export const SidebarDropdown = ({
    title,
    pathnames,
    image
}: SidebarDropdownProps) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const router = useRouter();

    const toggleIsOpenDropdown = () => {
        setIsOpenDropdown(prevIsOpenDropdown => !prevIsOpenDropdown);
    }

    useEffect(() => {
        const shouldKeepOpen = pathnames.some(item => router.pathname.startsWith(item.pathname));
        if (shouldKeepOpen !== isOpenDropdown) {
            toggleIsOpenDropdown()
        }
    }, [router.pathname]);

    return (
        <div >
            <button
                onClick={() => toggleIsOpenDropdown()}
                className={pathnames.some(item => item.pathname === router.pathname) ? styles.dropActiveLink : styles.dropNavlink}
            >
                <div className={styles.dropdownButton} >
                    <Image src={image ? image.img : Revenue} alt="Icon" width={20} height={20} className={styles.icon} />
                    {title}
                </div>
                <Arrow className={`white-fill ${isOpenDropdown ? '' : 'arrow-down'}`} />
            </button>

            {isOpenDropdown && (
                <div className={`dropdown-menu ${isOpenDropdown ? 'open' : ''}`}>
                    <div className={styles.dropLine} />
                    <div className={styles.dropLinks}>
                        {pathnames.map((item: SidebarDropdownItem) => (
                            <Link
                                href={item.pathname}
                                className={`droplink-wrap ${router.pathname == item.pathname ? "drop-active-link" : ""}`}
                            >
                                <div>{item.label}</div>
                            </Link>
                        ))}
                    </div>

                </div>
            )}
        </div>
    );
};

export default SidebarDropdown;

