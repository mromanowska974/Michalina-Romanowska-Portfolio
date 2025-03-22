import Footer from "../components/UI/Footer/Footer";
import Navbar from "../components/UI/Navbar/Navbar";
import styles from './layout.module.css';
import './globals.css';
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

async function RootLayout({ children }) {
    const messages = await getMessages();
    const locale = await getLocale();

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