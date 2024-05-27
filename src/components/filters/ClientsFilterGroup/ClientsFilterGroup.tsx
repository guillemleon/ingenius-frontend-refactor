import React from 'react'
import Searchbox from '../Searchbox/Searchbox'
import Image from 'next/image'
import PlusWhite from "@/assets/icons/plus-white.svg";
import Reload from "@/assets/icons/reload.svg";
import { exportCSV } from '@/utils/api/http';
import styles from './ClientsFilterGroup.module.scss'

const ClientsFilterGroup = ({ data, searchByFields, setFilteredData, csvExportCategory, onReloadData }: ClientsFilterGroupProps) => {

    const handleSearch = (search: string) => {
        const filtered = data.filter((item: any) => {
            return searchByFields(item, search);
        });
        setFilteredData(search.length > 0 ? filtered : data)
    };

    const handleExportCSV = () => {
        console.log("Export CSV");
        console.log(data[0])
        try {
            if (csvExportCategory) {
                const teamId = data[0].team;
                exportCSV(csvExportCategory, teamId, csvExportCategory);
            }
        } catch (error) {
            console.error("Error exporting file:", error);
        }
    }

    const handleOpenFormSidepanel = () => {
        console.log("Open Form Sidepanel");
    }

    const handleReloadData = () => {
        if (onReloadData) onReloadData();
    }

    return (
        <div className={styles.filtersSearchContainer}>
            <div className={styles.buttonGroup}>
                <Searchbox handleSearch={handleSearch} />
                <label htmlFor="file-upload" className={styles.appButtonCream}>
                    CSV Export
                </label>
                <button
                    className={styles.inputFile}
                    id="file-upload"
                    type="button"
                    onClick={handleExportCSV}
                />
                <button
                    className={styles.appButton}
                    onClick={handleOpenFormSidepanel}
                >
                    <Image src={PlusWhite} alt="Icon" width={14} height={14} />
                    Add Brand
                </button>
                <button className={styles.reloadButton} onClick={handleReloadData}>
                    <Image src={Reload} alt="Icon" width={18} height={18} />
                </button>
            </div>
        </div>
    )
}


export default ClientsFilterGroup