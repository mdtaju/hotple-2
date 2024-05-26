"use client";
import { useEffect } from "react";
import BottomMenuMobile from "../ui/bottom-menu/bottom-menu-mobile";
import ContentBody from "./content-body";
import TopMenu from "./top-menu";

export default function HomeContent() {
  useEffect(() => {
    const setViewportHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Set the height on initial load
    setViewportHeight();

    // Update the height on resize
    window.addEventListener("resize", setViewportHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", setViewportHeight);
    };
  }, []);
  return (
    <div className="home_content_main_container">
      <TopMenu />
      <ContentBody />
      <BottomMenuMobile />
    </div>
  );
}
