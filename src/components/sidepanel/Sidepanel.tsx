import React, { useEffect } from "react";
import Link from "next/link";
import HelpIcon from "@/assets/svg/Help";
import { Arrow } from "@/assets/svg/Arrow";
import styles from "./Sidepanel.module.scss"

const Sidepanel = ({
    isOpen,
    closeSidepanel,
    href,
    children
}: SidepanelProps) => {

    useEffect(() => {

    }, []);

    if (!isOpen) return null;

    return (
        <>
            <button className={styles.overlayer} onClick={closeSidepanel} />
            <div className={styles.sidepanelContainer}>
                <div className={styles.sidepanelBox}>
                    <div className={styles.sidepanelHeader}>
                        <Link
                            className={styles.brownLink}
                            href={{
                                pathname: href.pathname,
                                query: { id: href.query.id },
                            }}
                        >
                            <Arrow className={styles.arrowLeft} />
                            {`View Profile`}
                        </Link>
                        <div className={styles.buttonGroup}>
                            <Link href="/support" passHref>
                                <button className={styles.sidepanelTopButton}>
                                    <HelpIcon />
                                    Get help
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </>
    );
};

export default Sidepanel;
