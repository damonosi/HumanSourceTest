import Footer from "./Footer";
import "./globals.css";
import Header from "./Header";
export const metadata = {
  title: "Human Source",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html id="root" lang="en">
      <head />

      <body className="m-0 mx-auto flex items-center  justify-center  overflow-x-hidden bg-[#E5E5E5] ">
        <div
          className=" relative grid w-full  grid-cols-1  "
          id="site-container"
        >
          <Header />
          <main className=" z-30 mt-16 flex w-full flex-col  ">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
