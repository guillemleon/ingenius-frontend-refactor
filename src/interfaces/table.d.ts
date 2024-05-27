interface TableProps {
    data: any[];
    fields: { name: string, className: string }[];
    tableFields: { name: string, className: string }[];
    images: { index: number, fieldName: string }[];
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
