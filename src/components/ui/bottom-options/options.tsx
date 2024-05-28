"use client";
import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { RiRefreshLine } from "react-icons/ri";
import { BsArrowUp } from "react-icons/bs";
import { IoIosArrowRoundUp } from "react-icons/io";

export default function BottomOptions() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    if (isVisible) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="bottom_menu_options_container">
      <div className="bottom_menu_options_inner_container">
        <Tooltip title="사진과 텍스트만 보기" placement="left">
          <button onClick={scrollToTop}>
            {isVisible ? (
              <BsArrowUp style={{ width: "20px", height: "20px" }} />
            ) : (
              <AiOutlinePicture style={{ width: "20px", height: "20px" }} />
            )}
          </button>
        </Tooltip>
        <Tooltip title="새로 고치다" placement="left">
          <button>
            <RiRefreshLine style={{ width: "20px", height: "20px" }} />
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
