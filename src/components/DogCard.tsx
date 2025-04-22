"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import richieImg1 from "../../public/richie/richieImg1.webp";
import richieImg2 from "../../public/richie/richieImg2.webp";
import richieImg3 from "../../public/richie/richieImg3.webp";
import richieImg4 from "../../public/richie/richieImg4.webp";

const images = [richieImg1, richieImg2, richieImg3, richieImg4];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

function DogCard() {
  const isMobile = useIsMobile();

  const content = (
    <div className="flex items-center justify-center -space-x-3">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`richie img ${index}`}
          width={70}
          quality={100}
          className="rounded-full border-2 border-white dark:border-gray-800 hover:scale-110 transition-all duration-300"
        />
      ))}
    </div>
  );

  return isMobile ? (
    <Popover>
      <PopoverTrigger className="font-semibold italic cursor-pointer">
        Dog🐾
      </PopoverTrigger>
      <PopoverContent>{content}</PopoverContent>
    </Popover>
  ) : (
    <HoverCard>
      <HoverCardTrigger className="font-semibold italic cursor-pointer">
        Dog🐾
      </HoverCardTrigger>
      <HoverCardContent>{content}</HoverCardContent>
    </HoverCard>
  );
}

export default DogCard;
