const breadcrumbLinks = [
    { label: "Clients", link: "/clients/creators" },
    { label: "Creators", link: "/clients/creators", current: true },
];

const fields = [
    { name: "Name", className: "tableHeaderCell" },
    { name: "Email", className: "tableHeaderCell" },
    { name: "Niche", className: "tableHeaderCellCenter" },
    { name: "Active Projects", className: "tableHeaderCellCenter" },
    { name: "Active Projects Value", className: "tableHeaderCellCenter" }
]

const tableFields = [
    { name: "name", className: "tableCell" },
    { name: "email", className: "tableCell" },
    { name: "niche", className: "tableCenterCell" },
    { name: "active_projects", className: "tableCenterCell" },
    { name: "active_projects_value", className: "tableCenterCell" }
]

const images = [
    { fieldName: "profile_picture_url", index: 0 }
]

export { breadcrumbLinks, fields, tableFields, images };