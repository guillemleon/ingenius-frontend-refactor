import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import "@/styles/fonts.css";
import "@/styles/global.css";
import { AppProvider } from "@/context/AppContext";
import Head from "next/head";
import "@/styles/core.css";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import "@/styles/elements.css";
import "@/styles/modal.css";
import "@/styles/dropdown.css";
import "@/styles/auth.css";
import "@/styles/profile.css";
import "@/styles/tables.css";
import "@/styles/kanban.css";
import "@/styles/sidepanel.css";
import "@/styles/dashboard.css";
import "@/styles/form.css";
import { useRouter } from "next/router";
import { refreshToken } from "@/utils/api/tokens";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const refreshTokenOnLoad = async () => {
            const access = await localStorage.getItem('access');
            const refresh = await localStorage.getItem('refresh');

            console.log(access, refresh)

            if (!access || !refresh) {
                router.push("/login");
            } else {
                console.log("1")

                if (refresh) {
                    console.log("2")

                    await refreshToken();
                    setInterval(async () => {
                        await refreshToken();
                    }, 1000 * 30);
                } else {
                    router.push("/login");
                }
            }
        };

        refreshTokenOnLoad().finally(() => {
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        });
    }, []);

    if (loading) {
        return (
            <div
                className="spinner-container"
                style={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <div className="spinner" />
            </div>
        )
    } else {
        return (
            <AppProvider>
                <Head>
                    <title>Ingenius</title>
                </Head>
                <div className="root">
                    <Component {...pageProps} />
                </div>
            </AppProvider>
        );
    }
}
