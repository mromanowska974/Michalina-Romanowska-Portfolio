import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from './layout.module.css';
import './globals.css';
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
// import { cookies, headers } from "next/headers";
// import { signOut } from "../auth";
config.autoAddCss = false;

async function RootLayout({ children }) {
    const messages = await getMessages();
    const locale = await getLocale();

    // const token = (await cookies()).get('authjs.session-token')?.value;
    // const pathname = (await headers()).get('x-pathname');
    // console.log('Token:', token);
    // console.log('Pathname:', pathname);

    // if (token && !pathname.includes('/secret-door')) {
    //     console.log('Token exists and pathname does not include /secret-door');
    //     await signOut();
    // }

    return (
            <html lang={locale}>
                <body>
                    <NextIntlClientProvider messages={messages}>
                        <div id={styles.root}>
                            <Navbar />
                            <div className={styles.content}>
                                {/* <AnimatedOutlet/> */}
                                {children}
                            </div>
                            <Footer />
                        </div>
                    </NextIntlClientProvider>
                </body>
            </html>
    );
}

export default RootLayout;