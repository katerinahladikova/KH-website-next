import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Navigation } from "../components/Navigation";
import Footer from "../components/Footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Kateřina Hladíková | Front-End Developerka",
    description: "Front-End Developerka",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="cs">
            <body className={`${inter.variable} antialiased bg-surface`}>
                <NextIntlClientProvider>
                    <Navigation />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
