"use client";

import { Providers } from "./providers";
import "@/styles/globals.css";
import Image from "next/image";
import 'animate.css';
import Lottie from "lottie-react"
import loveAnimationData from "@/public/lottie/lottie.json"
import { useEffect, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showHearts, setShowHearts] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll" , () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 1300) {
        setShowHearts(true);
      } else {
        setShowHearts(false);

      }
    })
  }, [])
  
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
        {showHearts && <Lottie className="fixed z-[1] h-screen -top-[300px]" animationData={loveAnimationData} loop={true} />}
        {showHearts && <Lottie className="fixed z-[1] h-screen" animationData={loveAnimationData} loop={true} />}
        <Lottie className="fixed z-[1] h-screen -bottom-[300px]" animationData={loveAnimationData} loop={true} />
          <div className="w-screen md:h-[350px] h-[500px] relative">
            <Image  layout="fill" objectFit="cover" alt="Cover" src="/banner.jpg" className="bg-fixed" />
            <div className="flex w-full h-full absolute bg-black/60">

            </div>
          </div>
          {/* <Header /> */}
          <div className="flex md:w-3/4 w-full md:px-0 px-4 m-auto p-4 mt-4">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
