const breadcrumbLinks = [
    { label: "Partnerships", link: "/partnerships/deals" },
    { label: "Deals", link: "/partnerships/deals", current: true },
];

const fields = [
    { name: "Partner", className: "tableHeaderCell" },
    { name: "Deal", className: "tableHeaderCell" },
    { name: "Total Campaigns", className: "tableHeaderCellCenter" },
    { name: "Contract Value", className: "tableHeaderCellCenter" },
    { name: "Label", className: "tableHeaderCellCenter" }
]

const tableFields = [
    { name: "brand_name", className: "tableCell" },
    { name: "name", className: "tableCell" },
    { name: "total_campaigns", className: "tableCenterCell" },
    { name: "contract_value", className: "tableCenterCell" },
    { name: "deal_stage_name", className: "tableCenterCell" }
]

const images = [
    { fieldName: "brand_image_url", index: 0 }
]

export { breadcrumbLinks, fields, tableFields, images };