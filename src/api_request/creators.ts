import { get } from "@/utils/api/http";

export const fetchCreators = (callback: Function, errorCallback: Function) => {
    get(
        "creators/",
        {},
    )
        .then((response: any) => callback(response))
        .catch((error: any) => errorCallback(error));
}

