const breadcrumbLinks = [
    // { label: "Home", link: "/" },
    { label: "Partnerships", link: "/partnerships/projects" },
    {
        label: "Projects",
        link: "/partnerships/projects",
        current: true,
    },
];

const fields = [
    { name: "Creator", className: "tableHeaderCell" },
    { name: "Project", className: "tableHeaderCell" },
    { name: "Campaign", className: "tableHeaderCellCenter" },
    { name: "Brand", className: "tableHeaderCellCenter" },
    { name: "ContractValue", className: "tableHeaderCellCenter" },
    { name: "Label", className: "tableHeaderCellCenter" },
]

const tableFields = [
    { name: "creator_name", className: "tableCell" },
    { name: "name", className: "tableCell" },
    { name: "campaign_name", className: "tableCenterCell" },
    { name: "brand_name", className: "tableCenterCell" },
    { name: "contract_value", className: "tableCenterCell" },
    { name: "project_stage_name", className: "tableCenterCell" }
]

const images = [
    { fieldName: "creator_profile_picture", index: 0 },
    { fieldName: "brand_image_url", index: 3 }
]

export { breadcrumbLinks, fields, tableFields, images };