import { ThemeContextComponent } from "@/client/contexts/ThemeContext";
import "./globals.css";
import { Open_Sans, Roboto } from "@next/font/google";
import { cookies } from "next/headers";
import Navbar from "@/client/components/navbar/Navbar";

const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userCookie = cookies().get("personal_site_theme");
  return (
    <html lang="pt-br" className="scroll-smooth ">
      <head />
      <ThemeContextComponent
        cookie={userCookie?.value}
        font={openSans.className}
      >
        <div
          className={`w-full min-h-screen bg-app dark:bg-appDark 2xl:flex 
          2xl:justify-center`}
        >
          <div
            className="w-full max-w-screen-2xl 2xl:border-x-[1px] border-separator
            dark:border-separatorDark box-border"
          >
            <Navbar />
            {children}
          </div>
        </div>
      </ThemeContextComponent>
    </html>
  );
}

//
