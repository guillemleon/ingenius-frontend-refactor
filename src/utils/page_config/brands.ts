const breadcrumbLinks = [
    { label: "Clients", link: "/clients/brands" },
    { label: "Brands", link: "/clients/brands", current: true },
];

const fields = [
    { name: "Name", className: "tableHeaderCell" },
    { name: "Website", className: "tableHeaderCell" },
    { name: "Email", className: "tableHeaderCellCenter" },
    { name: "Active Campaigns", className: "tableHeaderCellCenter" },
    { name: "Active Campaigns Value", className: "tableHeaderCellCenter" }
]

const tableFields = [
    { name: "name", className: "tableCell" },
    { name: "website", className: "tableCell" },
    { name: "email", className: "tableCenterCell" },
    { name: "active_campaigns", className: "tableCenterCell" },
    { name: "active_campaigns_value", className: "tableCenterCell" }
]

const images = [
    { fieldName: "profile_picture_url", index: 0 }
]

export { breadcrumbLinks, fields, tableFields, images };