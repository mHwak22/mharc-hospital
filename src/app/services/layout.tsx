import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "./_Components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center justify-center mt-40 mb-20 mr-20 ml-20">
      <div className="flex w-[30%]"><SideBar/></div>
      <div className="flex w-[70%]">{children}</div>
    </div>
  );
}