import "./globals.css";
import { Providers } from "./providers";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
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
            <body className={`${inter.className} ${playfair.variable} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
