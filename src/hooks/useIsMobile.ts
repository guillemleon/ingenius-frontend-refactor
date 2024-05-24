import { useState, useEffect } from 'react';

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth < 900);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
        }

        handleResize();

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    return isMobile;
}

export default useIsMobile;
