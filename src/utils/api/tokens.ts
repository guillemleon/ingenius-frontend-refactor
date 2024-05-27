import { jwtDecode } from "jwt-decode";
import { DEPLOYED_API_BASE_URL } from "./http";

export const getAccessToken = (): string | null => {
    return localStorage.getItem('access_token');
};

export const getRefreshToken = (): string | null => {
    return localStorage.getItem('refresh_token');
};

export const setAccessToken = (token: string) => {
    localStorage.setItem('access_token', token);
};

export const refreshAccessToken = async (): Promise<string | null> => {
    const url: string = `${DEPLOYED_API_BASE_URL}/token/refresh/`;

    const refreshToken = getRefreshToken();
    if (!refreshToken) return null;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: refreshToken }),
    });

    if (response.ok) {
        const data = await response.json();
        setAccessToken(data.accessToken);
        return data.accessToken;
    }

    return null;
};

export const refreshToken = async () => {
    const refresh = await localStorage.getItem('refresh');

    if (refresh) {
        const url = DEPLOYED_API_BASE_URL + "/token/refresh/";

        try {
            // Decode the refresh token
            const decodedToken: any = jwtDecode(refresh);

            // Check if the token is expired
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp < currentTime) {
                // Token is expired, handle accordingly
                localStorage.removeItem('access');
                localStorage.removeItem('refresh');
                window.location.href = '/auth';
            } else {
                // Token is not expired, proceed with the API call
                await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ refresh }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        localStorage.setItem('access', data.access);
                    })
                    .catch(() => {
                        localStorage.removeItem('access');
                        localStorage.removeItem('refresh');
                        window.location.href = '/login';
                    });
            }
        } catch (error) {
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            window.location.href = '/login';
        }
    }
};