interface SidepanelProps {
    isOpen: boolean;
    closeSidepanel: () => void;
    href: {
        pathname: string,
        query: {
            [key: string]: string | number | undefined
        }
    }
    children?: React.ReactNode;
}