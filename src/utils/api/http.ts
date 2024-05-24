export const DEPLOYED_API_BASE_URL = process.env.NODE_ENV === 'development' ? 'https://ingenius-api-f948e80544f9.herokuapp.com/api' : 'https://api.ingeniusstudio.com';

const juno = "xeAsoZwt"

async function fetchWithTokenRenewal(url: string, options: any, errorCallback: Function) {
    try {
        const response = await fetch(url, options);
        if (response.status === 401) {
            // Intenta renovar el token de acceso
            const refreshResponse = await fetch('token/refresh/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refresh: localStorage.getItem('refresh') }),
            });

            if (refreshResponse.ok) {
                const data = await refreshResponse.json();
                localStorage.setItem('access', data.access);
                options.headers['Authorization'] = `Bearer ${data.access}`;
                return fetch(url, options);
            } else {
                window.location.href = '/login';
                return;
            }
        }
        return response;
    } catch (error: any) {
        errorCallback();
        console.error(`Request to ${url} failed: ${error.message}`);
        return error;
    }
}

export async function loginPost<T>(endpoint: string, data: any, headers: any, errorCallback: Function): Promise<T> {
    const url: string = `${DEPLOYED_API_BASE_URL}/${endpoint}`;

    try {
        const response: Response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
        });
        const responseData: T = response.ok ? await response.json() : response;
        return responseData;
    } catch (error: any) {
        errorCallback();
        console.error(`POST request to ${url} failed: ${error.message}`);
        return error;
    }
}

export async function post<T>(url: string, data: any, headers: any, errorCallback: Function): Promise<T> {
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            ...headers
        },
    };
    const response = await fetchWithTokenRenewal(url, options, errorCallback);
    const responseData: T = await response.json();
    return responseData;
}

export async function get<T>(url: string, headers: any, errorCallback: Function): Promise<T> {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            ...headers
        },
    };
    const response = await fetchWithTokenRenewal(url, options, errorCallback);
    const responseData: T = await (response as Response).json();
    return responseData;
}

export async function put<T>(url: string, data: any, headers: any, errorCallback: Function): Promise<T> {
    const options = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            ...headers
        },
    };
    const response = await fetchWithTokenRenewal(url, options, errorCallback);
    const responseData: T = await response.json();
    return responseData;
}

export async function del<T>(url: string, headers: any, errorCallback: Function): Promise<T> {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            ...headers
        },
    };
    const response = await fetchWithTokenRenewal(url, options, errorCallback);
    const responseData: T = await response.json();
    return responseData;
}