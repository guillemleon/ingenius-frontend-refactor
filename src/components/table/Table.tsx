import React, { Fragment, useEffect, useState } from "react";
import Header from "./header/Header";
import styles from "./Table.module.scss";
import Pagination from "../pagination/Pagination";

const Table = ({
    data,
    fields,
    tableFields,
    images,
}: TableProps) => {
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);

    useEffect(() => {
        paginatedData.slice(startIndex, endIndex);
    }, [currentPage])

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <Header fields={fields} />
                <tbody>
                    {paginatedData?.length > 0 && paginatedData?.map((item) => (
                        <tr key={item.id} className={styles.tableRow}>
                            {tableFields?.map((field, index) => (
                                <td key={`${field}-${index}`} className={styles[field.className]}>
                                    <div className={styles.cell}>
                                        {images?.length > 0 && images.find(i => i.index === index) && (
                                            <img
                                                src={item[images.find(i => i.index === index)?.fieldName || '']}
                                                alt={item.name}
                                                className={styles.tableImage}
                                                loading="lazy"
                                            />
                                        )}
                                        {typeof item[field.name] === 'string' && item[field.name].startsWith('http', 'https') ? (
                                            <a href={item[field.name]} target="_blank">
                                                {item[field.name]}
                                            </a>
                                        ) : (
                                            <Fragment>{item[field.name]}</Fragment>

                                        )}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                data={data}
                onPageChange={onPageChange}
            />
        </div>
    );
};

export default Table;
