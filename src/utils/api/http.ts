export const DEPLOYED_API_BASE_URL = process.env.NODE_ENV === 'development' ? 'https://ingenius-api-f948e80544f9.herokuapp.com/api' : 'https://api.ingeniusstudio.com';

const juno = "xeAsoZwt"

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

export async function post<T>(endpoint: string, data: any, headers: any, errorCallback: Function): Promise<T> {
    const url: string = `${DEPLOYED_API_BASE_URL}/${endpoint}`;

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            ...headers
        },
    };
    const response = await fetch(url, options);
    const responseData: T = await response.json();
    return responseData;
}

export async function get(endpoint: string, headers: any) {
    const url: string = `${DEPLOYED_API_BASE_URL}/${endpoint}`;

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            ...headers
        },
    };
    const response = await fetch(url, options);

    if (response.ok) {
        return response.json();
    }

    return;
}

export async function put<T>(endpoint: string, data: any, headers: any, errorCallback: Function): Promise<T> {
    const url: string = `${DEPLOYED_API_BASE_URL}/${endpoint}`;

    const options = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            ...headers
        },
    };
    const response = await fetch(url, options);
    const responseData: T = await response.json();
    return responseData;
}

export async function del<T>(endpoint: string, headers: any, errorCallback: Function): Promise<T> {
    const url: string = `${DEPLOYED_API_BASE_URL}/${endpoint}`;

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            ...headers
        },
    };
    const response = await fetch(url, options);
    const responseData: T = await response.json();
    return responseData;
}