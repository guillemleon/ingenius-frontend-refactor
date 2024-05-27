import { get } from "@/utils/api/http";

export const fetchBrands = (callback: Function, errorCallback: Function) => {
    get(
        "brands/",
        {},
    )
        .then((response: any) => callback(response))
        .catch((error: any) => errorCallback(error));
}