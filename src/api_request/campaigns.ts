import { get } from "@/utils/api/http";

export const fetchCampaigns = (callback: Function, errorCallback: Function) => {
    get(
        "campaigns/",
        {},
    )
        .then((response: any) => callback(response))
        .catch((error: any) => errorCallback(error));
}