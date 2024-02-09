import type { Metadata } from "next";
import { Inter, Dancing_Script, Great_Vibes, WindSong } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "I love her",
    description: "J'aime cette fille 🫶🏻",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <div id="modal-root"/>
            </body>
        </html>
    );
}
