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

const profileConfig = {
    image: {
        fieldName: "profile_picture_url",
    },
    header: [
        { title: "CREATOR", fieldName: "name" },
        { title: "CONTACT", fieldName: "email" },
        { title: "SOCIALS", fieldName: undefined },
    ],
    info: [
        { title: "NICHE", fieldName: "niche" },
        { title: "ACTIVE PROJECTS", fieldName: "active_projects" },
        { title: "ACTIVE PROJECTS VALUE", fieldName: "active_projects_value" }
    ],
    contact: {
        title: "CONTACT CREATOR",
        fieldName: "email"
    }
}

const searchByFields = (item: any, search: string) => {
    return (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.niche.toLowerCase().includes(search.toLowerCase())
    );
};

export { breadcrumbLinks, fields, tableFields, images, profileConfig, searchByFields };