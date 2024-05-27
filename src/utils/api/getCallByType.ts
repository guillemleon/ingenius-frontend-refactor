import { fetchBrands } from "@/api_request/brands";
import { fetchCampaigns } from "@/api_request/campaigns";
import { fetchCreators } from "@/api_request/creators";
import { fetchDeals } from "@/api_request/deals";
import { fetchProjects } from "@/api_request/projects";

interface GetCallByTypeInterface {
    [key: string]: (callback: Function, errorCallback: Function) => void;
}

export const getCallByType: GetCallByTypeInterface = {
    brands: fetchBrands,
    creators: fetchCreators,
    deals: fetchDeals,
    campaigns: fetchCampaigns,
    projects: fetchProjects
}