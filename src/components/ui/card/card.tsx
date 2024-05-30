"use client";
import { listsDataTypes } from "@/utils/demo-data";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { Backdrop } from "@mui/material";
import ProfileImg from "/public/profile.png";
import ReplyImg from "/public/reply-img.jpg";
import CommentProfile from "/public/coment-profile.jpg";
import { BsThreeDots } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export default function Card({ item }: { item: listsDataTypes }) {
  const muiTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 509,
        md: 865, // Customized md breakpoint
        lg: 1280,
        xl: 1900,
      },
    },
  });
  const { theme } = useTheme();
  const isMediumScreen = useMediaQuery(muiTheme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const isExtraLargeScreen = useMediaQuery(muiTheme.breakpoints.down("xl"));

  const anchorRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [backDropColor, setBackDropColor] = useState(
    "rgba(255, 255, 255, 0.4)"
  );

  useEffect(() => {
    if (theme !== "light") {
      setBackDropColor("rgba(0, 0, 0, 0.2)");
    } else {
      setBackDropColor("rgba(0, 0, 0, 0.4)");
    }
  }, [theme]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="home_content_list_item_container"
        ref={anchorRef}
        onClick={handleClickOpen}>
        {/* image container */}
        <div className="list_item_img_container">
          <Image
            src={item.img_url}
            alt={item.title}
            layout="fill"
            placeholder="blur"
            blurDataURL={item.img_url}
            className="list_img"
          />
        </div>
        {/* info container */}
        <div
          style={{ padding: "0.5rem", paddingBottom: "0px" }}
          className="home_content_info_container">
          <h2>{item.title}</h2>
          <div className="content_info_inclusions">
            {/* profile sec */}
            <div className="list_profile_container">
              <div
                style={{ width: "20px", height: "20px", position: "relative" }}>
                <Image
                  src={ReplyImg}
                  alt="profile-img"
                  className="list_profile_img"
                />
              </div>
              <span>이것은 사용자 이름입니다</span>
            </div>
            {/* react */}
            <div className="list_react">
              <IoMdHeartEmpty style={{ width: "18px", height: "18px" }} />
              <span>100+</span>
            </div>
          </div>
        </div>
      </div>
      {/* {!isMediumScreen && ( */}
      <Dialog
        // fullScreen={!isMediumScreen}
        BackdropComponent={Backdrop}
        BackdropProps={{
          sx: {
            backgroundColor: backDropColor, // Change the color as needed
          },
        }}
        sx={
          isMediumScreen
            ? {
                "& .MuiDialog-container": {
                  "& .MuiPaper-root": {
                    minWidth: "100%",
                    // minHeight: "100vh",
                    minHeight: "calc(var(--vh, 1vh) * 100)",
                  },
                },
              }
            : {
                "& .MuiDialog-container": {
                  "& .MuiPaper-root": {
                    minWidth: "800px", // Set your width here
                    maxWidth: "calc(100vw - 50px)",
                    height: "calc(100vh - 48px)",
                    maxHeight: "947px",
                    borderRadius: "16px",
                  },
                },
              }
        }
        open={open}
        onClose={() => handleClose()}
        PaperProps={{
          style: {
            animation: `${open ? "dialogOpen" : "dialogClose"} 0.3s forwards`,
          },
        }}
        aria-labelledby="responsive-dialog-title">
        {/* Dialog content here */}
        <div className="content_details_view_container">
          {/* header start */}
          <div className="dialog_header header_small_view">
            {/* close btn */}
            <div
              onClick={() => handleClose()}
              className="close_btn_dialog_outer">
              <RiCloseFill style={{ minWidth: "22px", minHeight: "22px" }} />
            </div>
            <div className="profile_01">
              {/* img container */}
              <div className="profile_img_container">
                <Image
                  src={ProfileImg}
                  alt="profileImg"
                  className="profile_img"
                />
              </div>
              {/* name */}
              <Link href={"/"} style={{ textDecoration: "none" }}>
                <span>
                  이것은 사용자 이름입니다 이것은 사용자 이름입니다 이것은
                  사용자 이름입니다
                </span>
              </Link>
            </div>
            {/* button */}
            <button className="focus_btn_profile">집중하다</button>
          </div>
          {/* image container */}
          <div className="content_dialog_img_container">
            <Image
              src={item.img_url}
              alt={item.title}
              layout="fill"
              placeholder="blur"
              blurDataURL={item.img_url}
              className="content_dialog_img"
            />
          </div>
          {/* info container */}
          <div className="content_dialog_info_container">
            {/* content container */}
            <div>
              {/* header start */}
              <div className="dialog_header header_large_view">
                <div className="profile_01">
                  {/* img container */}
                  <div className="profile_img_container">
                    <Image
                      src={ProfileImg}
                      alt="profileImg"
                      className="profile_img"
                    />
                  </div>
                  {/* name */}
                  <Link href={"/"} style={{ textDecoration: "none" }}>
                    <span>
                      이것은 사용자 이름입니다 이것은 사용자 이름입니다 이것은
                      사용자 이름입니다
                    </span>
                  </Link>
                </div>
                {/* button */}
                <button className="focus_btn_profile">집중하다</button>
              </div>
              {/* header end */}
              {/* middle container */}
              <div className="middle_content">
                <div className="middle_content_inner_container">
                  {/* content description start */}
                  <div className="content_disk_01">
                    <p>
                      자연의 아름다움에 둘러싸여 있으면 스트레스 수준이 낮아지고
                      불안감이 줄어들며 전반적인 웰빙이 향상됩니다. 새들의
                      지저귀는 소리, 나무 사이로 스치는 바람, 피부에 닿는 태양의
                      느낌은 모두 우리가 주변 세계와 더욱 연결되어 있다는 느낌을
                      갖도록 도와줍니다.
                    </p>
                    <p>
                      자연의 아름다움에 둘러싸여 있으면 스트레스 수준이 낮아지고
                      불안감이 줄어들며 전반적인 웰빙이 향상됩니다. 새들의
                      지저귀는 소리, 나무 사이로 스치는 바람, 피부에 닿는 태양의
                      느낌은 모두 우리가 주변 세계와 더욱 연결되어 있다는 느낌을
                      갖도록 도와줍니다.
                    </p>
                    <p>
                      자연의 아름다움에 둘러싸여 있으면 스트레스 수준이 낮아지고
                      불안감이 줄어들며 전반적인 웰빙이 향상됩니다. 새들의
                      지저귀는 소리, 나무 사이로 스치는 바람, 피부에 닿는 태양의
                      느낌은 모두 우리가 주변 세계와 더욱 연결되어 있다는 느낌을
                      갖도록 도와줍니다.
                    </p>
                    <p>
                      자연의 아름다움에 둘러싸여 있으면 스트레스 수준이 낮아지고
                      불안감이 줄어들며 전반적인 웰빙이 향상됩니다. 새들의
                      지저귀는 소리, 나무 사이로 스치는 바람, 피부에 닿는 태양의
                      느낌은 모두 우리가 주변 세계와 더욱 연결되어 있다는 느낌을
                      갖도록 도와줍니다.
                    </p>
                    <div className="content_desk_date">
                      <span>2024-04-30</span>
                      <button className="menu_dots_btn_01">
                        <BsThreeDots />
                      </button>
                    </div>
                  </div>
                  {/* content description end */}
                  {/* comment section start */}
                  <div className="comment_section_container">
                    <span className="total_comment_count">
                      총 댓글 100개 이상
                    </span>
                    {/* comments */}
                    <div className="comments_001">
                      {/* single comment and replies */}
                      <div className="comment_container_01">
                        {/* comment */}
                        <div className="comment_inner_container_01">
                          {/* profile image and content */}
                          <div className="d-flex align-items-start gap-2">
                            {/* profile img */}
                            <div className="profile_img_container">
                              <Image
                                src={CommentProfile}
                                alt="profileImg"
                                className="profile_img"
                              />
                            </div>
                            {/* content */}
                            <div className="comment_content_area">
                              <Link
                                href={"/"}
                                style={{ textDecoration: "none" }}>
                                <span>
                                  이것은 좋은 남자의 프로필 이름입니다
                                </span>
                              </Link>
                              <p>
                                내 마음에는 햇빛이 있고 내 마음에는 따뜻함이
                                있습니다.
                              </p>
                              <span
                                style={{ fontSize: "12px", marginTop: "10px" }}>
                                05-23 city
                              </span>
                              {/* reacts actions */}
                              <div className="react_actions">
                                {/* thumbs */}
                                <div>
                                  <IoMdHeartEmpty
                                    style={{ width: "16px", height: "16px" }}
                                  />{" "}
                                  <span>엄지손가락</span>
                                </div>
                                {/* comment */}
                                <div>
                                  <FaRegComment
                                    style={{ width: "14px", height: "14px" }}
                                  />{" "}
                                  <span>회신하다</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* menu btn */}
                          <button className="menu_dots_btn_01">
                            <BsThreeDots />
                          </button>
                        </div>
                        {/* replies */}
                        <div className="comment_container_01 replies_container_01">
                          <div className="comment_inner_container_01">
                            {/* profile image and content */}
                            <div className="d-flex align-items-start gap-2">
                              {/* profile img */}
                              <div
                                className="profile_img_container"
                                style={{
                                  minWidth: "24px",
                                  minHeight: "24px",
                                  maxWidth: "24px",
                                  maxHeight: "24px",
                                }}>
                                <Image
                                  src={ReplyImg}
                                  alt="reply-img"
                                  className="profile_img"
                                />
                              </div>
                              {/* content */}
                              <div className="comment_content_area">
                                <Link
                                  href={"/"}
                                  style={{ textDecoration: "none" }}>
                                  <span>인형 유저입니다</span>
                                </Link>
                                <p>
                                  내 마음에는 햇빛이 있고 내 마음에는 따뜻함이
                                  있습니다.
                                </p>
                                <span
                                  style={{
                                    fontSize: "12px",
                                    marginTop: "10px",
                                  }}>
                                  05-23 city
                                </span>
                                {/* reacts actions */}
                                <div className="react_actions">
                                  {/* thumbs */}
                                  <div>
                                    <IoMdHeartEmpty
                                      style={{ width: "16px", height: "16px" }}
                                    />{" "}
                                    <span>엄지손가락</span>
                                  </div>
                                  {/* comment */}
                                  <div>
                                    <FaRegComment
                                      style={{ width: "14px", height: "14px" }}
                                    />{" "}
                                    <span>회신하다</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* menu btn */}
                            <button className="menu_dots_btn_01">
                              <BsThreeDots />
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* single comment and replies */}
                      <div className="comment_container_01">
                        {/* comment */}
                        <div className="comment_inner_container_01">
                          {/* profile image and content */}
                          <div className="d-flex align-items-start gap-2">
                            {/* profile img */}
                            <div className="profile_img_container">
                              <Image
                                src={CommentProfile}
                                alt="profileImg"
                                className="profile_img"
                              />
                            </div>
                            {/* content */}
                            <div className="comment_content_area">
                              <Link
                                href={"/"}
                                style={{ textDecoration: "none" }}>
                                <span>
                                  이것은 좋은 남자의 프로필 이름입니다
                                </span>
                              </Link>
                              <p>
                                내 마음에는 햇빛이 있고 내 마음에는 따뜻함이
                                있습니다.
                              </p>
                              <span
                                style={{ fontSize: "12px", marginTop: "10px" }}>
                                05-23 city
                              </span>
                              {/* reacts actions */}
                              <div className="react_actions">
                                {/* thumbs */}
                                <div>
                                  <IoMdHeartEmpty
                                    style={{ width: "16px", height: "16px" }}
                                  />{" "}
                                  <span>엄지손가락</span>
                                </div>
                                {/* comment */}
                                <div>
                                  <FaRegComment
                                    style={{ width: "14px", height: "14px" }}
                                  />{" "}
                                  <span>회신하다</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* menu btn */}
                          <button className="menu_dots_btn_01">
                            <BsThreeDots />
                          </button>
                        </div>
                        {/* replies */}
                        <div className="comment_container_01 replies_container_01">
                          <div className="comment_inner_container_01">
                            {/* profile image and content */}
                            <div className="d-flex align-items-start gap-2">
                              {/* profile img */}
                              <div
                                className="profile_img_container"
                                style={{
                                  minWidth: "24px",
                                  minHeight: "24px",
                                  maxWidth: "24px",
                                  maxHeight: "24px",
                                }}>
                                <Image
                                  src={ReplyImg}
                                  alt="reply-img"
                                  className="profile_img"
                                />
                              </div>
                              {/* content */}
                              <div className="comment_content_area">
                                <Link
                                  href={"/"}
                                  style={{ textDecoration: "none" }}>
                                  <span>인형 유저입니다</span>
                                </Link>
                                <p>
                                  내 마음에는 햇빛이 있고 내 마음에는 따뜻함이
                                  있습니다.
                                </p>
                                <span
                                  style={{
                                    fontSize: "12px",
                                    marginTop: "10px",
                                  }}>
                                  05-23 city
                                </span>
                                {/* reacts actions */}
                                <div className="react_actions">
                                  {/* thumbs */}
                                  <div>
                                    <IoMdHeartEmpty
                                      style={{ width: "16px", height: "16px" }}
                                    />{" "}
                                    <span>엄지손가락</span>
                                  </div>
                                  {/* comment */}
                                  <div>
                                    <FaRegComment
                                      style={{ width: "14px", height: "14px" }}
                                    />{" "}
                                    <span>회신하다</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* menu btn */}
                            <button className="menu_dots_btn_01">
                              <BsThreeDots />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* comment section end */}
                </div>
              </div>
            </div>
            {/* footer */}
            <div className="content_dialog_view_footer header_large_view">
              <div className="content_dialog_footer_inner_container">
                <div className="input_container_footer_dialog">
                  <FaRegCircleUser
                    style={{ minWidth: "16px", minHeight: "16px" }}
                  />
                  <span>댓글을 남기려면 로그인하세요.</span>
                </div>
                {/* reacts */}
                {/* likes */}
                <div className="content_footer_react">
                  <IoMdHeartEmpty style={{ width: "22px", height: "22px" }} />
                  <span>1k+</span>
                </div>
                {/* stars */}
                <div className="content_footer_react">
                  <FaRegStar style={{ width: "22px", height: "22px" }} />
                  <span>1k+</span>
                </div>
                {/* comment */}
                <div className="content_footer_react">
                  <FaRegComment style={{ width: "22px", height: "22px" }} />
                  <span>1k+</span>
                </div>
                {/* share */}
                <div className="content_footer_react">
                  <RiShareBoxLine style={{ width: "22px", height: "22px" }} />
                </div>
              </div>
            </div>
          </div>
          {/* footer */}
          <div className="content_dialog_view_footer footer_small_view">
            <div className="content_dialog_footer_inner_container">
              <div className="input_container_footer_dialog">
                <FaRegCircleUser
                  style={{ minWidth: "16px", minHeight: "16px" }}
                />
                <span>
                  {isSmallScreen ? "댓글" : "댓글을 남기려면 로그인하세요"}
                </span>
              </div>
              {/* reacts */}
              {/* likes */}
              <div className="content_footer_react">
                <IoMdHeartEmpty style={{ width: "22px", height: "22px" }} />
                <span>1k+</span>
              </div>
              {/* stars */}
              <div className="content_footer_react">
                <FaRegStar style={{ width: "22px", height: "22px" }} />
                <span>1k+</span>
              </div>
              {/* comments */}
              <div className="content_footer_react">
                <FaRegComment style={{ width: "22px", height: "22px" }} />
                <span>1k+</span>
              </div>
              {/* comments */}
              <div className="content_footer_react">
                <RiShareBoxLine style={{ width: "22px", height: "22px" }} />
              </div>
            </div>
          </div>
        </div>
      </Dialog>
      {/* )} */}
    </>
  );
}
