interface TableProps {
    data: any[];
    fields: { name: string, className: string }[];
    tableFields: { name: string, className: string }[];
    images: { index: number, fieldName: string }[];
    openSidepanel: (id: number) => void;
    filteredData?: any[];
    useFilteredData?: boolean;
}

interface PaginationProps {
    data: PaginationDataOptions;
    currentPage: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

type PaginationDataOptions = BrandTableDataInterface[] |
    CreatorTableDataInterface[] |
    CampaignTableDataInterface[] |
    ProjectTableDataInterface[] |
    DealTableDataInterface[];


interface ClientsFilterGroupProps {
    data: any[];
    searchByFields: (item: any, search: string) => boolean;
    setFilteredData: (data: any[]) => void;
    csvExportCategory?: string;
    onReloadData?: () => void;
}
