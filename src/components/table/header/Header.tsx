import Arrow from "@/assets/svg/Arrow";
import React from "react";
import styles from "./Header.module.scss";

const Header = ({
    fields,
}: {
    fields: { name: string }[];
}) => {
    return (
        <thead>
            <tr className={styles.tableHeaderRow} >
                {fields?.map((field: any, index: number) => {
                    return (
                        <th key={`${field.name}-${index}`}>
                            <div className={styles[field.className]}>
                                <button className={styles.tableHeaderButton}>
                                    <Arrow className={"arrow-up"} />
                                </button>
                                <p>{field.name}</p>
                            </div>
                        </th>
                    );
                })}
            </tr>
        </thead>
    )
};

export default Header;
