import React from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({
    data,
    currentPage,
    itemsPerPage,
    onPageChange,
}: PaginationProps) => {
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    }

    const previousPage = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    }

    return (
        <div className={styles.pagination}>
            <span>{`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(
                currentPage * itemsPerPage,
                data?.length
            )} of ${data?.length}`}</span>
            <button
                onClick={previousPage}
                disabled={currentPage === 1 || data.length === 0}
            >
                &lt;
            </button>
            <span>{currentPage}</span>
            <button
                onClick={nextPage}
                disabled={
                    currentPage === totalPages ||
                    data.length === 0 ||
                    data.length < itemsPerPage
                }
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
