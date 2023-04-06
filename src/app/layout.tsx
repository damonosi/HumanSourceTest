import Providers from "@/utils/providers";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import Header from "./Header";

export const metadata = {
  title: "Human Source",
};
const madera = localFont({
  src: [
    {
      path: "../../public/fonts/Madera-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Madera-Thin-Italic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/Madera-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Madera-Light-Italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Madera-Regular.ttf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../../public/fonts/Madera-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Madera-Medium-Italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Madera-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Madera-Bold-Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Madera-Extra-Bold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Madera-Extra-Bold-Italic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  
  variable: "--font-madera",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html id="root" lang="ro" className={`${madera.variable} font-sans`}>
      <head />
      <Providers>
        <body className="m-0 mx-auto flex items-center  justify-center overflow-x-hidden  bg-gri-deschis-bg text-gri-brand ">
          <div
            className="relative grid w-full grid-cols-1  overflow-hidden  "
            id="site-container"
          >
            <Header />
            <main className=" z-30 mt-14 flex w-full flex-col  ">
              {children}
              <Analytics />
            </main>

            <Footer />
          </div>
        </body>
      </Providers>
    </html>
  );
}
