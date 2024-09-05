"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconCloud,
  IconCompass,
  IconCompassFilled,
  IconCropPortraitFilled,
  IconHome,
  IconLogout,
  IconMountain,
  IconMountainOff,
  IconSearch,
  IconSettings,
  IconUserBolt,
  IconUserCircle,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import darkLogo from "../../../public/dark theme logo.png";
import lightLogo from "../../../public/light theme logo.png";
import logo from "../../../public/logo.png";

export function GlobalSidebar() {
  const links = [
    {
      label: "Home",
      href: "/home",
      icon: (
        <IconHome className="text-neutral-700 dark:text-neutral-200 size-6 flex-shrink-0" />
      ),
    },
    {
      label: "Search",
      href: "/search",
      icon: (
        <IconSearch className="text-neutral-700 dark:text-neutral-200 size-6 flex-shrink-0" />
      ),
    },
    {
      label: "Explore",
      href: "/explore",
      icon: (
        <IconCompass className="text-neutral-700 dark:text-neutral-200 size-6 flex-shrink-0" />
      ),
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 size-6 flex-shrink-0" />
      ),
    },
    
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col z-50 fixed top-0 left-0 md:flex-row bg-gray-100 dark:bg-neutral-800 flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" 
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-52 flex flex-col gap-5">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Aryan Kapoor",
                href: "/profile",
                icon: (
                  <IconUserCircle className="text-neutral-600 dark:text-neutral-200 size-6 flex-shrink-0"/>
                    
                ),
              }}
            />
            <SidebarLink
              link={{
                label: "Settings",
                href: "/settings",
                icon: (
                  <IconSettings className="text-neutral-600 dark:text-neutral-200 size-6 flex-shrink-0"/>
                    
                ),
              }}
            />
            <SidebarLink
              link={{
                label: "Logout",
                href: "/logout",
                icon: (
                  <IconLogout className="text-neutral-600 dark:text-neutral-200 size-5 ml-1 flex-shrink-0"/>
                    
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {/* <Dashboard /> */}
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="/home"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src={lightLogo}
        alt="logo"
        className=" h-13 w-[180px] absolute top-2"
      />
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="/home"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src={logo}
        alt="logo"
        className=" size-7 absolute top-3"
      />     
    </Link>
  );
};

// Dummy dashboard component with content
export const Dashboard = () => {
  return (
    <div className="flex flex-1 h-screen">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex gap-2">
          {[...new Array(4)].map((i) => (
            <div
              key={"first-array" + i}
              className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
        <div className="flex gap-2 flex-1">
          {[...new Array(2)].map((i) => (
            <div
              key={"second-array" + i}
              className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
