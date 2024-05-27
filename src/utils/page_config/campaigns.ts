const breadcrumbLinks = [
    { label: "Partnerships", link: "/partnerships/campaigns" },
    {
        label: "Campaigns",
        link: "/partnerships/campaigns",
        current: true,
    },
];

const fields = [
    { name: "Partner", className: "tableHeaderCell" },
    { name: "Campaign", className: "tableHeaderCell" },
    { name: "Total Projects", className: "tableHeaderCellCenter" },
    { name: "Contract Value", className: "tableHeaderCellCenter" },
    { name: "Label", className: "tableHeaderCellCenter" }
]

const tableFields = [
    { name: "brand_name", className: "tableCell" },
    { name: "name", className: "tableCell" },
    { name: "total_projects", className: "tableCenterCell" },
    { name: "contract_value", className: "tableCenterCell" },
    { name: "campaign_stage_name", className: "tableCenterCell" }
]

const images = [
    { fieldName: "brand_image_url", index: 0 }
]

export { breadcrumbLinks, fields, tableFields, images };