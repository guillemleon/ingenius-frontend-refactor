import React, { useEffect, useState } from "react";
import styles from "./profile.module.scss"
import { getCallByType } from "@/utils/api/getCallByType";
import Spinner from "@/components/spinner/Spinner";
import Layout from "@/components/layout/layout";
import { useRouter } from "next/router";
import ProfileComponent from "@/components/sidepanel/ProfileComponent/ProfileComponent";
import { profileConfig } from "@/utils/page_config/creators";

const CreatorsProfilePage = () => {
    const router = useRouter()
    const { id } = router.query;

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [id]);

    const fetchData = async () => {
        getCallByType['creators'](
            (response: any) => {
                const profile = response.find((p: any) => p.id === parseInt(id as string));
                console.log(profile)
                setData(profile)
                setLoading(false)
            },
            (error: any) => {
                setLoading(false)
                console.error("Error fetching data:", error);
            }
        )
    }

    return (
        <Layout type="default" breadcrumbs={[
            { label: "View Creators", link: "/", current: false },
        ]}>
            {loading ?
                <Spinner /> :
                <ProfileComponent
                    data={data}
                    profileConfig={profileConfig}
                />
            }
        </Layout>
    );
};

export default CreatorsProfilePage;
