import './globals.css';
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Root from "../components/Root/Root";

config.autoAddCss = false;

async function RootLayout({ children }) {
    const messages = await getMessages();
    const locale = await getLocale();

    return (
            <html lang={locale}>
                <body>
                    <NextIntlClientProvider messages={messages}>
                        <Root>{children}</Root>
                        <div id="modal"></div>
                    </NextIntlClientProvider>
                </body>
            </html>
    );
}

export default RootLayout;