import { get } from "@/utils/api/http";

export const fetchUserProfile = (callback: Function, errorCallback: Function) => {
    get(
        "users/",
        {},
    )
        .then((response: any) => callback(response))
        .catch((error: any) => errorCallback(error));
};
