import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.scss";
import { SITE_NAME } from "@/constants/seo.constants";
import { Providers } from "./providers";
import { Toaster } from "sonner";

const zen = Noto_Sans({
  subsets : ["latin", "cyrillic"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-zen',
  style: ['normal']
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Best free planing app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={zen.className}>
        <Providers>
          {children}

          <Toaster
            position="bottom-right"
            duration={1500}
            theme="dark"
          />
        </Providers>
      </body>
    </html>
  );
}
