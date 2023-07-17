import React from "react";
import logo from "./img/logo.png";
import logoDark from "./img/logoDark.svg";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
import add from "./img/add.png";
import addDark from "./img/addDark.svg";
import home from "./img/home.png";
import like from "./img/like.png";
import msg from "./img/msg.png";
import msgDark from "./img/msgDark.svg";
import top from "./img/top.png";
import ResponsiveAppBar from "./Components/ComponentsAppBar";
import search from "./img/search.png";
import searchDark from "./img/searchDark.svg";
import compas from "./img/compas.png";
import compasDark from "./img/compasDark.svg";
import reels from "./img/reels.png";
import reelsDark from "./img/reelsDark.svg";
import likes from "./img/likes.svg";
import likeDark from "./img/likeDark.svg";
import portrait from "../Pages/Home/img/OIG.jpg";
import logo2 from "./img/instagramLogo.png";
import Switcher from "../components/Switcher/Switcher";
import Stack from "@mui/material/Stack";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import homeDark from "./img/darkHomeEmpty.svg"
import instaDark from "./img/instaDark.png"
import problem from "./img/problem.svg"


const Layout = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const anchorRef = React.useRef(null);
  const anchorRef1 = React.useRef(null);

   const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleToggle1 = () => {
    setOpen1((prevOpen1) => !prevOpen1);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const handleClose1 = (event) => {
    if (anchorRef1.current && anchorRef1.current.contains(event.target)) {
      return;
    }
    setOpen1(false);
  };

  function handleListKeyDown1(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen1(false);
    } else if (event.key === "Escape") {
      setOpen1(false);
    }
  }

  return (
    <div className="dark:bg-[black] dark:text-[white]  ">
      <div className="">
        <div className="container smM:w-full">
          <div className="py-[10px] px-[10px] hidden   m-auto mdD:flex items-center justify-between">
            <div>
              <img src={logo} alt="" className="dark:hidden " />
            <img src={logoDark} alt="" className="  p-[10px]   hidden dark:flex " />

            </div>
            <div className="flex gap-x-4">
              <div className="  md:flex items-center  relative">
                <SearchIcon className="absolute z-10 left-3 top-2" />
                <input
                  className="border-2 dark:border-0 py-[5px] pl-[40px] rounded-[5px] dark:bg-[#262626] dark:text-white bg-[#EFEFEF]"
                  placeholder="Search . . ."
                  type="text"
                />
              </div>
              <div className=" flex items-center gap-[20px]">
                <div className="flex gap-[20px]">
                  {/* <Link to={"/"}> <div> <img src={home} alt="" /> </div> </Link>
                                <Link to={"/message"}> <div> <img src={msg} alt="" /> </div> </Link>
                                <Link to={"/add"}> <div> <img src={add} alt="" /> </div> </Link>
                                <Link to={"/top"}> <div> <img src={top} alt="" /> </div> </Link> */}
                  <Link to={"/like"}> 
                  <div>
                      <img src={like} alt="" className="dark:hidden" />{" "}
                      <img src={likeDark} alt="" className="w-[24px] h-[24px] hidden dark:flex " />
                    </div>{" "}
                  </Link>
                </div>
                <div className="w-[0px] mdD:hidden">
                  <ResponsiveAppBar />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="dark: bg-[#363636] " />
      </div>
      <div>
        <div className="w-[275px] mdD:hidden xlL:w-[75px] dark:bg-black bg-white fixed left-0 top-0 border-[1px] dark:border-[#363636]  h-[100vh] ">
          <div className="w-[90%] m-auto  ">
            <img src={logo} alt="" className="py-[40px] xlL:hidden p-[10px] w-[50%] dark:hidden " />
            <img src={logoDark} alt="" className="py-[40px] dark:xlL:hidden p-[10px] mdD:hidden w-[50%] hidden dark:flex " />
            
            <img src={logo2} alt="" className="w-[24px] hidden dark:hidden xlL:flex h-[24px] my-[35px] mx-auto  " />
            <img src={instaDark} alt="" className="w-[28px] hidden 2xlL:hidden dark:xlL:flex h-[24px] my-[35px] mx-auto  " />

            <div className="sideMenu ">
              <ul className="text-[18px] font-[400]">
                <li className="p-[18px] hover:bg-slate-100 dark:hover:bg-zinc-900 hover:rounded-[30px]">
                  <Link to={"/"}>
                    <div className="flex  text-[18px] font-[400] gap-x-4 ">
                      <img src={home} alt=""  className="dark:hidden hover:scale-[1.1]"/>
                      <img src={homeDark} alt="" className="hidden dark:flex hover:scale-[1.1]"/>
                      <h1 className="text-[16px]  xlL:hidden">Главная</h1>
                    </div>
                  </Link>
                </li>
                <li className="p-[18px] hover:bg-slate-100 dark:hover:bg-zinc-900 hover:rounded-[30px] ">
                  <div className=" flex gap-x-3">
                    <img src={search} alt="" className="w-[24px] h-[24px] dark:hidden hover:scale-[1.1]"/>
                    <img src={searchDark} alt="" className="w-[24px] h-[24px] hidden dark:flex hover:scale-[1.1]"/>
                    <h1 className="text-[16px] xlL:hidden ">
                      Поисковый запрос
                    </h1>
                  </div>
                </li>
                <li className="hover:bg-slate-100 dark:hover:bg-zinc-900 hover:rounded-[30px]">
                  <div className=" flex gap-5 p-[18px] ">
                    <img src={compas} alt="" className="w-[24px] h-[24px] dark:hidden hover:scale-[1.1]" />
                    <img src={compasDark} alt="" className="w-[24px] h-[24px] hidden dark:flex hover:scale-[1.1]" />
                    <h1 className="text-[16px] xlL:hidden ">Интересное</h1>
                  </div>
                </li>
                <li className="hover:bg-slate-100 dark:hover:bg-zinc-900 hover:rounded-[30px]">
                  <Link to={"/reels"} >
                  <div className="flex gap-5 p-[18px]  ">
                    <img src={reels} alt="" className="w-[24px] h-[24px] dark:hidden hover:scale-[1.1]" />
                    <img src={reelsDark} alt="" className="w-[24px] h-[24px] hidden dark:flex hover:scale-[1.1] " />
                    
                    <h1 className="text-[16px] xlL:hidden ">Reels</h1>
                  </div>
                  </Link>
                </li>
                <li className="p-[18px] hover:bg-slate-100 dark:hover:bg-zinc-900 hover:rounded-[30px]">
                  <Link to={"/message"}>
                    <div className="flex gap-5">
                      <img src={msg} alt="" className="w-[24px] h-[24px] dark:hidden hover:scale-[1.1]" />
                      <img src={msgDark} alt="" className="w-[24px] h-[24px] hidden dark:flex hover:scale-[1.1]" />
                      <h1 className="text-[16px] xlL:hidden ">Сообщения</h1>
                    </div>
                  </Link>
                </li>
                <li className="p-[18px] hover:bg-slate-100 dark:hover:bg-zinc-900 hover:rounded-[30px]">
                  <Link to={"/like"}>
                    <div className="flex gap-5">
                      <img src={likes} alt="" className="w-[24px] h-[24px] dark:hidden hover:scale-[1.1]" />
                      <img src={likeDark} alt="" className="w-[24px] h-[24px] hidden dark:flex hover:scale-[1.1] " />
                      <h1 className="text-[16px] xlL:hidden ">Уведомления</h1>
                    </div>
                  </Link>
                </li>
                <li>
                  <div className="flex gap-5 p-[18px] hover:bg-slate-100 dark:hover:bg-zinc-900 hover:rounded-[30px]">
                    <img src={add} alt="" className="w-[24px] h-[24px] dark:hidden hover:scale-[1.1] " />
                    <img src={addDark} alt="" className="hidden dark:flex hover:scale-[1.1] " />

                    <h1 className="text-[16px] xlL:hidden ">Создать</h1>
                  </div>
                </li>
                <li className="p-[18px] hover:bg-slate-100 dark:hover:bg-zinc-900 hover:rounded-[30px]">
                  <Link to={"profile"}>
                    <div className="flex gap-5 ">
                      <img
                        src={portrait}
                        alt=""
                        className="w-[24px] h-[24px] rounded-[50%] hover:scale-[1.1] "
                      />
                      <h1 className="text-[16px] xlL:hidden ">Профиль</h1>
                    </div>
                  </Link>
                </li>
              </ul>
              <div className="burger pt-[140px] 2xlL:pt-0">
              <div>
              <div
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className="flex items-center gap-x-[15px] h-[50px] p-[12px] rounded-[10px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  <div>
                    <div className="hidden dark:block">
                      <svg aria-label="Настройки" class="_ab6-" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24"
                        role="img" viewBox="0 0 24 24" width="24" >
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="3"
                          x2="21"
                          y1="4"
                          y2="4"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="3"
                          x2="21"
                          y1="12"
                          y2="12"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="3"
                          x2="21"
                          y1="20"
                          y2="20"
                        ></line>
                      </svg>
                    </div>
                    <div className="dark:hidden">
                      <svg
                        aria-label="Настройки"
                        class="_ab6-"
                        color="#000"
                        fill="#000"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="3"
                          x2="21"
                          y1="4"
                          y2="4"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="3"
                          x2="21"
                          y1="12"
                          y2="12"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="3"
                          x2="21"
                          y1="20"
                          y2="20"
                        ></line>
                      </svg>
                    </div>
                    </div>
                </div>
                <h1 className="text-[14px] xlL:hidden font-[500] text-[#000] dark:text-[#F5F5F5] app:hidden">
                  Ещё
                </h1>
              </div>
              <div className="flex items-center justify-center">
                <Stack direction="row" spacing={2}>
                  <div>
                    <Popper
                      open={open}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      placement="bottom-start"
                      transition
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom-start"
                                ? "left top"
                                : "left bottom",
                          }}
                        >
                          <Paper
                            className="w-[270px] app:ml-[50px]"
                            style={{
                              backgroundColor: "#373636",
                              borderRadius: "18px",
                            }}
                          >
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList
                                autoFocusItem={open}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                className="bg-[#FFF] dark:bg-[#373636] rounded-[18px]"
                              >
                                <div>
                                  <div className="mx-[7px] px-[5px] rounded-[7px] py-[8px] hover:bg-[#514f4f] text-[#000] dark:text-[#FFF]">
                                    <Link
                                      to={"/account/edit"}
                                      onClick={handleClose}
                                      className="flex items-center gap-x-[10px] px-[15px] py-[5px] font-[500]"
                                      style={{ fontSize: "14px" }}
                                    >
                                      <div className="dark:hidden">
                                        <svg
                                          aria-label="Настройки"
                                          color="#000"
                                          fill="#000"
                                          height="24"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="24"
                                        >
                                          <title>Настройки</title>
                                          <circle
                                            cx="12"
                                            cy="12"
                                            fill="none"
                                            r="8.635"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                          ></circle>
                                          <path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                          ></path>
                                        </svg>
                                      </div>
                                      <div className="hidden dark:block">
                                        <svg
                                          aria-label="Настройки"
                                          color="rgb(245, 245, 245)"
                                          fill="rgb(245, 245, 245)"
                                          height="24"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="24"
                                        >
                                          <title>Настройки</title>
                                          <circle
                                            cx="12"
                                            cy="12"
                                            fill="none"
                                            r="8.635"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                          ></circle>
                                          <path
                                            d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                          ></path>
                                        </svg>
                                      </div>
                                      Настройки
                                    </Link>
                                  </div>
                                  <div className="mx-[7px] px-[5px] rounded-[7px] py-[8px] hover:bg-[#514f4f] text-[#000] dark:text-[#FFF]">
                                    <Link
                                      onClick={handleClose}
                                      
                                      className="flex items-center gap-x-[10px] px-[15px] py-[5px] font-[500]"
                                      style={{ fontSize: "14px" }}
                                    >
                                      <div className="dark:hidden">
                                        <svg
                                          aria-label="Ваши действия"
                                          class="x1lliihq x1n2onr6"
                                          color="#000"
                                          fill=" #000"
                                          height="24"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="24"
                                        >
                                          <title>Ваши действия</title>
                                          <path
                                            d="M12 1.505a10.5 10.5 0 1 1-7.424 17.924"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                          ></path>
                                          <polyline
                                            fill="none"
                                            points="8.893 15.108 12 12 12.012 12.012 12.012 5.793"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                          ></polyline>
                                          <circle
                                            cx="7.24"
                                            cy="2.651"
                                            r="1.125"
                                          ></circle>
                                          <circle
                                            cx="3.515"
                                            cy="5.83"
                                            r="1.125"
                                          ></circle>
                                          <circle
                                            cx="1.636"
                                            cy="10.353"
                                            r="1.125"
                                          ></circle>
                                          <circle
                                            cx="2.01"
                                            cy="15.235"
                                            r="1.125"
                                          ></circle>
                                        </svg>
                                      </div>
                                      <div className="hidden dark:block">
                                        <svg
                                          aria-label="Ваши действия"
                                          class="x1lliihq x1n2onr6"
                                          color="rgb(245, 245, 245)"
                                          fill="rgb(245, 245, 245)"
                                          height="24"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="24"
                                        >
                                          <title>Ваши действия</title>
                                          <path
                                            d="M12 1.505a10.5 10.5 0 1 1-7.424 17.924"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                          ></path>
                                          <polyline
                                            fill="none"
                                            points="8.893 15.108 12 12 12.012 12.012 12.012 5.793"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                          ></polyline>
                                          <circle
                                            cx="7.24"
                                            cy="2.651"
                                            r="1.125"
                                          ></circle>
                                          <circle
                                            cx="3.515"
                                            cy="5.83"
                                            r="1.125"
                                          ></circle>
                                          <circle
                                            cx="1.636"
                                            cy="10.353"
                                            r="1.125"
                                          ></circle>
                                          <circle
                                            cx="2.01"
                                            cy="15.235"
                                            r="1.125"
                                          ></circle>
                                        </svg>
                                      </div>
                                      Ваши действия
                                    </Link>
                                  </div>
                                  <div className="mx-[7px] px-[5px] rounded-[7px] py-[8px] hover:bg-[#514f4f] text-[#000] dark:text-[#FFF]">
                                    <Link
                                      onClick={handleClose}
                                      className="flex items-center gap-x-[10px] px-[15px] py-[5px] font-[500]"
                                      style={{ fontSize: "14px" }}
                                    >
                                      <div className="dark:hidden">
                                        <svg
                                          aria-label="Сохраненное"
                                          class="x1lliihq x1n2onr6"
                                          color="#000"
                                          fill="#000"
                                          height="24"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="24"
                                        >
                                          <title>Сохраненное</title>
                                          <polygon
                                            fill="none"
                                            points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                          ></polygon>
                                        </svg>
                                      </div>
                                      <div className="hidden dark:block">
                                        <svg
                                          aria-label="Сохраненное"
                                          class="x1lliihq x1n2onr6"
                                          color="rgb(245, 245, 245)"
                                          fill="rgb(245, 245, 245)"
                                          height="24"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="24"
                                        >
                                          <title>Сохраненное</title>
                                          <polygon
                                            fill="none"
                                            points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                          ></polygon>
                                        </svg>
                                      </div>
                                      Сохраненное
                                    </Link>
                                  </div>
                                  <div
                                    ref={anchorRef1}
                                    id="composition-button"
                                    aria-controls={
                                      open1 ? "composition-menu" : undefined
                                    }
                                    aria-expanded={open1 ? "true" : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle1}
                                    className="mx-[7px] px-[5px] rounded-[7px] py-[8px] hover:bg-[#514f4f] text-[#000] dark:text-[#FFF]"
                                  >
                                    <MenuItem
                                      onClick={handleClose}
                                      className="flex items-center gap-x-[10px] py-[50px]"
                                      style={{
                                        fontSize: "14px",
                                        width: "100%",
                                        height: "100%",
                                      }}
                                    >
                                      <div className="dark:hidden">
                                        <svg
                                          aria-label="Значок темы"
                                          class="x1lliihq x1n2onr6"
                                          color="rgb(0, 0, 0)"
                                          fill="rgb(0, 0, 0)"
                                          height="18"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="18"
                                        >
                                          <title>Значок темы</title>
                                          <path d="M12.00018,4.5a1,1,0,0,0,1-1V2a1,1,0,0,0-2,0V3.5A1.00005,1.00005,0,0,0,12.00018,4.5ZM5.28241,6.69678A.99989.99989,0,1,0,6.69647,5.28271l-1.06054-1.061A.99989.99989,0,0,0,4.22186,5.63574ZM4.50018,12a1,1,0,0,0-1-1h-1.5a1,1,0,0,0,0,2h1.5A1,1,0,0,0,4.50018,12Zm.78223,5.30322-1.06055,1.061a.99989.99989,0,1,0,1.41407,1.41406l1.06054-1.061a.99989.99989,0,0,0-1.41406-1.41407ZM12.00018,19.5a1.00005,1.00005,0,0,0-1,1V22a1,1,0,0,0,2,0V20.5A1,1,0,0,0,12.00018,19.5Zm6.71729-2.19678a.99989.99989,0,0,0-1.41406,1.41407l1.06054,1.061A.99989.99989,0,0,0,19.778,18.36426ZM22.00018,11h-1.5a1,1,0,0,0,0,2h1.5a1,1,0,0,0,0-2ZM18.01044,6.98975a.996.996,0,0,0,.707-.293l1.06055-1.061A.99989.99989,0,0,0,18.364,4.22168l-1.06054,1.061a1,1,0,0,0,.707,1.707ZM12.00018,6a6,6,0,1,0,6,6A6.00657,6.00657,0,0,0,12.00018,6Zm0,10a4,4,0,1,1,4-4A4.00458,4.00458,0,0,1,12.00018,16Z"></path>
                                        </svg>
                                      </div>
                                      <div className="hidden dark:block">
                                        <svg
                                          aria-label="Значок темы"
                                          class="x1lliihq x1n2onr6"
                                          color="rgb(245, 245, 245)"
                                          fill="rgb(245, 245, 245)"
                                          height="24"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="24"
                                        >
                                          <title>Значок темы</title>
                                          <path d="M11.502,22.99805A11.4313,11.4313,0,0,1,.49512,14.83691a.99889.99889,0,0,1,.251-.998,1.01148,1.01148,0,0,1,.99707-.249,9.43041,9.43041,0,0,0,2.75879.40821A9.5082,9.5082,0,0,0,13.5957,1.74023a1.00039,1.00039,0,0,1,1.24707-1.248A11.501,11.501,0,0,1,11.502,22.99805ZM3.08984,15.91211A9.49991,9.49991,0,0,0,21.002,11.498,9.57875,9.57875,0,0,0,15.916,3.08594,11.5083,11.5083,0,0,1,3.08984,15.91211Z"></path>
                                        </svg>
                                      </div>
                                      Переключить тему
                                    </MenuItem>
                                  </div>
                                  <div className="mx-[7px] px-[5px] rounded-[7px] py-[8px] hover:bg-[#514f4f] text-[#000] dark:text-[#FFF]">
                                    <MenuItem
                                      onClick={handleClose}
                                      className="flex items-center gap-x-[10px] px-[15px] py-[5px] font-[500]"
                                      style={{
                                        fontSize: "14px",
                                        width: "100%",
                                        height: "100%",
                                      }}>
                                        <div className="hidden dark:block svg">
                                      <svg className="  "
                                        aria-label="Сообщение о проблеме" class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)"
                                        height="24"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="24">
                                        <title>Сообщение о проблеме</title>
                                        <path d="M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"></path>
                                      </svg>
                                            </div>
                                        <div className="svg  dark:hidden">
                                      <svg className="  "
                                        aria-label="Сообщение о проблеме" class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="black"
                                        height="24"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="24">
                                        <title>Сообщение о проблеме</title>
                                        <path d="M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"></path>
                                      </svg>
                                      {/* <img src={problem} alt="" /> */}
                                            </div>    
                                      Сообщение о проблеме
                                    </MenuItem>
                                  </div>
                                  <div className="mx-[7px] px-[5px] rounded-[7px] py-[8px] hover:bg-[#514f4f] text-[#000] dark:text-[#FFF]">
                                    <MenuItem
                                      onClick={handleClose}
                                      className="flex items-center gap-x-[10px] py-[50px]"
                                      style={{
                                        fontSize: "14px",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    >
                                      Переключение между аккаунта...
                                    </MenuItem>
                                  </div>
                                  <div className="border-t border-[#5a5a5a] my-[12px] hover:bg-[#514f4f] text-[#000] dark:text-[#FFF]"></div>
                                  <div className="mx-[7px] px-[5px] rounded-[7px] py-[8px] hover:bg-[#514f4f] text-[#000] dark:text-[#FFF]">
                                    <Link
                                      to={"/login"}
                                      className="flex items-center px-[15px] py-[5px] font-[500]"
                                      style={{
                                        fontSize: "14px",
                                        width: "100%",
                                        height: "100%",
                                      }}
                                    >
                                      Выйти
                                    </Link>
                                  </div>
                                </div>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                  <div></div>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <div>
                    <Popper
                      open={open1}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      placement="bottom-start"
                      transition
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom-start"
                                ? "left top"
                                : "left bottom",
                          }}
                        >
                          <Paper
                            className="w-[270px] app:ml-[50px] bg-[#FFF] dark:bg-[#373636]"
                            style={{
                              backgroundColor: "#373636",
                              borderRadius: "18px",
                            }}
                          >
                            <ClickAwayListener onClickAway={handleClose1}>
                              <MenuList
                                autoFocusItem={open1}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={handleListKeyDown1}
                                className="bg-[#FFF] dark:bg-[#373636] rounded-[18px]"
                              >
                                <div>
                                  <div
                                    onClick={handleClose1}
                                    className="mx-[7px] px-[5px] rounded-[7px] py-[10px] text-[#000] dark:text-[#FFF] flex items-center justify-between"
                                  >
                                    <div className="flex items-center gap-x-[10px]">
                                      <svg
                                        aria-label="Назад"
                                        className="rotate-[270deg] cursor-pointer"
                                        onClick={() => {
                                          handleClose1();
                                          handleToggle();
                                        }}
                                        color="rgb(115, 115, 115)"
                                        fill="rgb(115, 115, 115)"
                                        height="12"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="12"
                                      >
                                        <title>Назад</title>
                                        <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                                      </svg>
                                      <h1 className="text-[#000] dark:text-[#F5F5F5] font-[600]">
                                        Переключить тему
                                      </h1>
                                    </div>
                                    <div className="flex items-center justify-center pr-[5px]">
                                    <div className="dark:hidden">
                                        <svg
                                          aria-label="Значок темы"
                                          class="x1lliihq x1n2onr6"
                                          color="rgb(0, 0, 0)"
                                          fill="rgb(0, 0, 0)"
                                          height="18"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="18"
                                        >
                                          <title>Значок темы</title>
                                          <path d="M12.00018,4.5a1,1,0,0,0,1-1V2a1,1,0,0,0-2,0V3.5A1.00005,1.00005,0,0,0,12.00018,4.5ZM5.28241,6.69678A.99989.99989,0,1,0,6.69647,5.28271l-1.06054-1.061A.99989.99989,0,0,0,4.22186,5.63574ZM4.50018,12a1,1,0,0,0-1-1h-1.5a1,1,0,0,0,0,2h1.5A1,1,0,0,0,4.50018,12Zm.78223,5.30322-1.06055,1.061a.99989.99989,0,1,0,1.41407,1.41406l1.06054-1.061a.99989.99989,0,0,0-1.41406-1.41407ZM12.00018,19.5a1.00005,1.00005,0,0,0-1,1V22a1,1,0,0,0,2,0V20.5A1,1,0,0,0,12.00018,19.5Zm6.71729-2.19678a.99989.99989,0,0,0-1.41406,1.41407l1.06054,1.061A.99989.99989,0,0,0,19.778,18.36426ZM22.00018,11h-1.5a1,1,0,0,0,0,2h1.5a1,1,0,0,0,0-2ZM18.01044,6.98975a.996.996,0,0,0,.707-.293l1.06055-1.061A.99989.99989,0,0,0,18.364,4.22168l-1.06054,1.061a1,1,0,0,0,.707,1.707ZM12.00018,6a6,6,0,1,0,6,6A6.00657,6.00657,0,0,0,12.00018,6Zm0,10a4,4,0,1,1,4-4A4.00458,4.00458,0,0,1,12.00018,16Z"></path>
                                        </svg>
                                      </div>
                                      <div className="hidden dark:block">
                                        <svg
                                          aria-label="Значок темы"
                                          class="x1lliihq x1n2onr6"
                                          color="rgb(245, 245, 245)"
                                          fill="rgb(245, 245, 245)"
                                          height="18"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="18"
                                        >
                                          <title>Значок темы</title>
                                          <path d="M11.502,22.99805A11.4313,11.4313,0,0,1,.49512,14.83691a.99889.99889,0,0,1,.251-.998,1.01148,1.01148,0,0,1,.99707-.249,9.43041,9.43041,0,0,0,2.75879.40821A9.5082,9.5082,0,0,0,13.5957,1.74023a1.00039,1.00039,0,0,1,1.24707-1.248A11.501,11.501,0,0,1,11.502,22.99805ZM3.08984,15.91211A9.49991,9.49991,0,0,0,21.002,11.498,9.57875,9.57875,0,0,0,15.916,3.08594,11.5083,11.5083,0,0,1,3.08984,15.91211Z"></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="border-t border-[#e4e4e4] dark:border-[#5a5a5a] my-[10px] hover:bg-[#514f4f] text-[#000] dark:text-[#F5F5F5]"></div>
                                  <div className="mx-[7px] px-[5px] rounded-[7px] py-[5px] hover:bg-[#514f4f] text-[#000] dark:text-[#F5F5F5] flex items-center justify-between">
                                    <MenuItem
                                      onClick={handleClose}
                                      className="flex items-center gap-x-[10px] py-[50px]"
                                      style={{
                                        fontSize: "14px",
                                        width: "100%",
                                        height: "100%",
                                      }}
                                    >
                                      Ночной режим
                                    </MenuItem>
                                    <div className="pr-[5px] ">
                                      <Switcher />
                                    </div>
                                  </div>
                                </div>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                </Stack>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
      <div className="footer hidden mdD:flex ">
        <div className=" fixed bottom-[0] w-full dark:bg-black  bg-[white] border-t-[1px] dark:border-[#363636]">
          <div className=" ml-[7px] sm:m-0  m-auto gap-[24px]">
            <div className="flex justify-evenly ">
              <div className="my-auto">
                <Link to={"/"}>
                  <img src={home} alt="" className="m-auto dark:hidden " />{" "}
                  <img src={homeDark} alt="" className="m-auto hidden dark:flex" />
                </Link>
              </div>
              <div className="my-auto">
                <Link to={"/top"}>
                  <img src={top} alt="" className="m-auto  dark:hidden" />{" "}
                  <img src={compasDark} alt="" className="w-[24px] h-[24px] hidden dark:flex" />
                </Link>
              </div>
              <div className="my-auto">
                <Link to={"/like"}>
                  <img src={reels} alt="" className=" w-[24px] h-[24px] dark:hidden " />{" "}
                  <img src={reelsDark} alt="" className="w-[24px] h-[24px] hidden dark:flex " />
                </Link>
              </div>
              
              <div className="my-auto">
                <Link to={"/add"}>
                  <img src={add} alt="" className="dark:hidden " />{" "}
                  <img src={addDark} alt="" className="hidden dark:flex " />

                </Link>
              </div>
              <div className="my-auto">
                <Link to={"/message"}>
                  <img src={msg} alt="" className="m-auto dark:hidden " />{" "}
                  <img src={msgDark} alt="" className="w-[24px] h-[24px] hidden dark:flex" />
                </Link>
              </div>
              
              <div className="">
                <div className="w-[30px] py-[15px] rounded-[50px] my-auto">
                  <Link to={"/profile"}>
                    <img
                      src={portrait} alt="" className="w-[24px] h-[24px] rounded-[50%]   "
                    />
                  </Link>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
