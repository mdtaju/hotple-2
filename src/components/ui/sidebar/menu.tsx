"use client";
import ThemeSwitcher from "@/components/common/theme-switcher/theme-switcher";
import { Popper } from "@mui/material";
import { useRef, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightUpLine } from "react-icons/ri";
import ClickAwayListener from "@mui/material/ClickAwayListener";

export default function Menu() {
  const [menuSubList, setMenuSubList] = useState("");
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClickAway = () => {
    setOpen(false);
    setTimeout(() => {
      setMenuSubList("");
    }, 500);
  };
  return (
    <>
      <div
        ref={anchorRef}
        onClick={handleClick}
        className="sidebar_menu_main_container">
        <HiOutlineMenu style={{ width: "1.5rem", height: "1.5rem" }} />
        <span>메뉴</span>
      </div>
      {/* popover */}
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        sx={{ zIndex: 1100 }}
        placement="top-start"
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 6], // [horizontal, vertical]
            },
          },
        ]}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="sidebar_popover_main_container">
            {menuSubList === "개인 정보 보호 계약" && (
              <>
                {/* sub list header */}
                <div className="sidebar_popover_sub_list_header">
                  <button onClick={() => setMenuSubList("")} aria-label="back">
                    <RiArrowLeftSLine className="custom-size-icon" />
                  </button>
                  <span>{menuSubList}</span>
                </div>
                {/* divider */}
                <div
                  className="sidebar_popover_divider"
                  style={{ marginBottom: "4px" }}></div>
                {/* sub lists */}
                <div>
                  {/* item 1 */}
                  <div className="sidebar_sub_list_item_container">
                    <span>사용자 계약</span>
                    <RiArrowRightUpLine className="sub_list_icon" />
                  </div>
                  {/* item 2 */}
                  <div className="sidebar_sub_list_item_container">
                    <span>개인 정보 정책</span>
                    <RiArrowRightUpLine className="sub_list_icon" />
                  </div>
                  {/* item 3 */}
                  <div className="sidebar_sub_list_item_container">
                    <span>핫스팟 규칙</span>
                    <RiArrowRightUpLine className="sub_list_icon" />
                  </div>
                </div>
              </>
            )}

            {!menuSubList && (
              <>
                {/* top lists start */}
                <div>
                  {/* item 1 */}
                  <div
                    onClick={() => setMenuSubList("개인 정보 보호 계약")}
                    className="sidebar_top_lists_top_item">
                    <span className="">개인 정보 보호 계약</span>
                    <MdOutlineArrowForwardIos />
                  </div>
                  {/* item 2 */}
                  <div className="sidebar_top_lists_bottom_item">
                    <span>도움말 및 고객 서비스</span>
                  </div>
                </div>
                {/* top lists end */}
                {/* divider */}
                <div className="sidebar_popover_divider"></div>
                {/* middle list start */}
                <div>
                  <div style={{ padding: "8px 12px" }}>
                    <span className="sidebar_popup_setup_title">면접방법</span>
                  </div>
                  {/* item 1 */}
                  <div className="sidebar_top_lists_bottom_item">
                    <span>키보드 단축키</span>
                  </div>
                  {/* item 2 */}
                  <div className="sidebar_top_lists_bottom_item">
                    <span>데스크탑에 핫플 추가</span>
                  </div>
                  {/* item 3 */}
                  <div className="sidebar_top_lists_bottom_item">
                    <span>작은 창 모드 열기</span>
                  </div>
                </div>
                {/* middle list end */}
                {/* divider */}
                <div
                  className="sidebar_popover_divider"
                  style={{ marginTop: "4px" }}></div>
                {/* setup start */}
                <div style={{ padding: "8px 12px" }}>
                  <span className="sidebar_popup_setup_title">설정</span>
                  <div className="sidebar_popover_setup_inner_container">
                    <span>다크 모드</span>
                    {/* modes start */}
                    <div>
                      <ThemeSwitcher />
                    </div>
                    {/* modes end */}
                  </div>
                </div>
                {/* setup end */}
              </>
            )}
          </div>
        </ClickAwayListener>
      </Popper>
    </>
  );
}
