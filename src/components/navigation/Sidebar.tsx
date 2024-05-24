import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import LogoText from "@/assets/brand/logo-text.png";
import Revenue from "@/assets/icons/revenue.svg";
import Clients from "@/assets/icons/clients.svg";
import Home from "@/assets/icons/home.svg";
import Settings from "@/assets/icons/settings.svg";
import Support from "@/assets/icons/supportAndHelp.svg";
import { useAppContext } from "@/context/AppContext";
import { getUserProfile } from "@/api_request/settings";
import styles from "./Sidebar.module.scss";
import SidebarDropdown from "./SidebarDropdown";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const { updateUserData, setUpdateUserData } = useAppContext();
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>();

  /* GET USER API CALL */

  useEffect(() => {
    fetchUserProfile();
  }, [router]);

  useEffect(() => {
    if (updateUserData) {
      fetchUserProfile();
      setUpdateUserData(false);
    }
  }, [updateUserData]);

  const fetchUserProfile = () => {
    getUserProfile(
      (response: any) => {
        setUserData(response[0] || []);
      },
      (error: any) => {
        console.error("Error fetching profile data:", error);
        setUserData(undefined);
      }
    );
  };

  return (
    <div className={styles.sidebarContainer}>

      <aside id="default-sidebar" aria-label="Sidebar" className={styles.sidebar}>
        <div className={styles.logoBox}>
          <Image src={LogoText} alt="logo" className={styles.mainLogo} />
        </div>

        <div className={styles.navBox}>
          <div className={styles.navLinks}>

            <div>
              <div className={styles.navTitle}>
                <p className={styles.smallcapsDark}>main</p>
              </div>
              <div className={styles.navGroup}>
                <Link
                  href="/dashboard"
                  className={[styles.navlinkWrap, `${router.pathname == "/dashboard" ? styles.activeLink : ""}`].join(' ')}
                >
                  <div>
                    <Image src={Home} alt="Icon" width={20} height={20} className={styles.icon} />
                  </div>
                  <div>Dashboard</div>
                </Link>

              </div>
            </div>

            <div>
              <div className={styles.navTitle}>
                <p className={styles.smallcapsDark}>manage</p>
              </div>

              <div className={styles.navGroup}>
                <SidebarDropdown
                  title="Clients"
                  pathnames={[
                    { label: "Brands", pathname: "/clients/brands" },
                    { label: "Creators", pathname: "/clients/creators" },
                  ]}
                  image={{ img: Clients }}
                />
                <SidebarDropdown
                  title="Partnerships"
                  pathnames={[
                    { label: "Deals", pathname: "/partnerships/deals" },
                    { label: "Campaigns", pathname: "/partnerships/campaigns" },
                    { label: "Projects", pathname: "/partnerships/projects" },
                  ]}
                  image={{ img: Revenue }}
                />
              </div>
            </div>

            <div>
              <div className={styles.navTitle}>
                <p className={styles.smallcapsDark}>settings</p>
              </div>
              <div className={styles.navGroup}>
                <SidebarLink
                  label="Support & Help"
                  pathname="/support"
                  image={{
                    img: Support,
                  }}
                />
                <SidebarLink
                  label="Settings"
                  pathname="/settings"
                  image={{
                    img: Settings,
                  }}
                />
              </div>
            </div>


          </div>


          <div>
            <Link
              href="/settings"
              className={styles.navlinkWrap}
            >
              <div>
                <div className={styles.sidebarImageWrap}>
                  <img
                    src={userData?.team_picture_url}
                    alt="u"
                    className={styles.sidebarProfile}
                  />
                </div>
                <div>
                  <p>{userData?.first_name}{" "}{userData?.last_name}</p>
                  <p className={styles.accountSubtitle}>{userData?.team_info?.name}</p>
                </div>
              </div >
            </Link >
          </div >
        </div >
      </aside >
    </div >
  )
};

export default Sidebar;