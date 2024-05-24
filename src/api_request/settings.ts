import { DEPLOYED_API_BASE_URL } from "@/utils/api/http";
import { get } from "http";

export const getUserProfile = async (
    callback: (data: any) => void,
    errorCallback?: (error: any) => void
) => {
    const url = DEPLOYED_API_BASE_URL + "users/";

    try {
        const data = await get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.access_token}`,
            }
        }, errorCallback);
        callback(data);
    } catch (error) {
        errorCallback && errorCallback(error);
    }
};