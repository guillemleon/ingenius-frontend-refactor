import { useEffect, useState } from 'react';

const useIsUserLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('access');
        setIsLoggedIn(!!token);
    }, []);

    return isLoggedIn;
};

export default useIsUserLoggedIn;