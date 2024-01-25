import type { Metadata } from "next";
import { Inter, Dancing_Script, Great_Vibes, WindSong } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"] });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const windSong = WindSong({ weight: ["400", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
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
