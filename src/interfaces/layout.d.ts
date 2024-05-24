interface LayoutProps {
    type: 'default' | 'table' | 'kanban';
    breadcrumbs: BreadcrumbItem[];
    children: React.ReactNode;
}

interface SidebarDropdownProps {
    title: string;
    pathnames: SidebarDropdownItem[];
    image?: any;
}

interface SidebarDropdownItem {
    label: string;
    pathname: string;
}

interface SidebarLinkProps {
    label: string;
    pathname: string;
    image?: any;
}

interface BreadcrumbItem {
    label: string;
    link: string;
    current?: boolean;
}