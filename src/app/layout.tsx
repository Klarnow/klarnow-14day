import "./globals.css";
import { Providers } from "./providers";
import { Bricolage_Grotesque, Playfair_Display } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });
const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: '--font-playfair-display',
});

export const metadata = {
    title: "Klarnow",
    description: "Story-led System Powered by AI",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${bricolage.className} ${playfair.variable} antialiased`}>
                <Providers>
                    <Navigation />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
