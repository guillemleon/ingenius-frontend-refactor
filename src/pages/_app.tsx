import React, { useEffect } from "react";
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

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const token = typeof window !== 'undefined' ? localStorage.getItem('access') : null;

    useEffect(() => {
        if (!token && router.route !== '/login') {
            router.replace('/login');
        } else if (token && router.route === '/login') {
            router.replace('/');
        }
    }, [router.route]);

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
