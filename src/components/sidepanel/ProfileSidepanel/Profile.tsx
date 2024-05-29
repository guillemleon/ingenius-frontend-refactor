import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss"
import { getCallByType } from "@/utils/api/getCallByType";
import Spinner from "@/components/spinner/Spinner";
import ProfileComponent from "../ProfileComponent/ProfileComponent";

const Profile = ({
    type,
    sidepanelSelectedData,
    profileConfig
}: {
    type: string;
    sidepanelSelectedData: number | undefined,
    profileConfig: any
}) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, []);

    useEffect(() => {
        console.log(data)
    }, [data])

    const fetchData = async () => {
        getCallByType[type](
            (response: any) => {
                const profile = response.find((profile: any) => profile.id === sidepanelSelectedData);
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
        <div className={styles.profileContainer}>
            {loading ?
                <Spinner /> :
                <div>
                    <ProfileComponent
                        data={data}
                        profileConfig={profileConfig}
                        isEditable={true}
                    />
                </div>
            }
        </div>
    );
};

export default Profile;
