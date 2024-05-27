import { get } from "@/utils/api/http";

export const fetchDeals = (callback: Function, errorCallback: Function) => {
    get(
        "deals/",
        {},
    )
        .then((response: any) => callback(response))
        .catch((error: any) => errorCallback(error));
}