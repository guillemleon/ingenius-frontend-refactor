import { get } from "@/utils/api/http";

export const fetchProjects = (callback: Function, errorCallback: Function) => {
    get(
        "projects/",
        {},
    )
        .then((response: any) => callback(response))
        .catch((error: any) => errorCallback(error));
}