import React from "react";
import { Arrow } from "@/assets/svg/Arrow";
import styles from "./Breadcrumb.module.scss";

interface BreadcrumbItem {
    label: string;
    link: string;
    current?: boolean;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    items,
}: BreadcrumbsProps) => {
    return (
        <nav aria-label="Breadcrumb" className={styles.breadcrumbContainer}>
            <ol role="list" className="row-items-center">
                {items?.map((item, index) => (
                    <li key={`ind-${index}`} className="row-items-center">
                        {item?.current || index === items?.length - 1 && items?.length > 1 ? (
                            <span className="text-brown">
                                {item?.label}
                            </span>
                        ) : (
                            <a className={`${items?.length > 1 ? "text-gray" : "text-brown"}`} href={item.link}>
                                {item?.label}
                            </a>
                        )}
                        {index < items?.length - 1 && (
                            <div className="bread-arrow">
                                <Arrow className="arrow-right" />
                            </div>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
