import { useState } from "react";
import {
  AiOutlineFileText,
  AiOutlineBarChart,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsFillImageFill, BsPerson } from "react-icons/bs";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";

import {
  BsArrowLeftShort,
  BsSearchHeartFill,
  BsFillGridFill,
  BsChevronDown,
} from "react-icons/bs";
import { GiRoyalLove } from "react-icons/gi";
import Carousel from "./Carousel";
function App() {
  const [open, setIsopen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const images = [
    "../images/Blackgirl1.jpeg",
    "../images/Blackgirl2.jpeg",
    "../images/Blackgirl3.jpeg",
    "../images/Blackgirl4.jpeg",
    "../images/Blackgirl5.jpeg",
    "../images/Blackgirl6.jpeg",
    "../images/Blackgirl7.jpeg",
  ];
  const Menus = [
    { title: "Dashboard" },
    { title: "pages", icon: <AiOutlineFileText /> },
    { title: "Media", icon: <BsFillImageFill />, spacing: true },
    {
      title: "Projects",
      icon: <BsReverseLayoutTextSidebarReverse />,
      subMenue: true,
      subMenuItems: [
        { title: "Submenu1" },
        { title: "Submenu2" },
        { title: "Submenu3" },
      ],
    },
    { title: "Inbox", icon: <AiOutlineMail /> },
    { title: "Analytics", icon: <AiOutlineBarChart /> },
    { title: "Profile", icon: <BsPerson />, spacing: true },
    { title: "Settings", icon: <AiOutlineSetting /> },
    { title: "Logout", icon: <AiOutlineLogout /> },
  ];
  return (
    <div className="flex">
      <div
        className={` bg-pale_green h-[1000px] p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative `}
      >
        <BsArrowLeftShort
          className={` bg-white text-pale_green text-3xl rounded-full absolute -right-3 top-9 border border-pale_green cursor-pointer ${
            !open && "rotate-180"
          } hover:bg-red-500 hover:duration-500 `}
          onClick={() => setIsopen(!open)}
        />
        <div className="inline-flex">
          <GiRoyalLove
            className={`text-red-500 text-4xl rounded block float-left cursor-pointer  mr-2 ${
              open && "rotate-[360deg]"
            } duration-500`}
          />
          <h1
            className={` text-red-300 origin-left font-medium text-3xl ${
              !open && "scale-0"
            } duration-500`}
          >
            {" "}
            Kenyan Girls
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-white mt-6 px-4 py-2 ${
            !open ? "px-2.5" : "px-4"
          } `}
        >
          <BsSearchHeartFill
            className={` text-red-500 text-lg block float-left cursor-pointer  ${
              open && "mr-2"
            } `}
            onClick={() => setIsopen(!open)}
          />
          <input
            type="text"
            placeholder="Search..."
            className={` text-base text-black focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={` text-red-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-red-200 rounded-md mt-2 ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className=" text-2xl block float-left">
                  {menu.icon ? menu.icon : <BsFillGridFill />}
                </span>
                <span
                  className={` text-base font-medium flex-1 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.subMenue && open && (
                  <BsChevronDown
                    className={`${submenuOpen && "rotate-180"} `}
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  />
                )}
              </li>
              {menu.subMenuItems && submenuOpen && open && (
                <ul>
                  {menu.subMenuItems.map((subMenuItem, index) => (
                    <li
                      key={index}
                      className="text-red-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 mx-5 hover:bg-red-200 rounded-md"
                    >
                      {subMenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
      <div className=" p-7"></div>
      <div className=" grid grid-cols-3">
        <div className=" max-w-lg pt-4 mr-2 shadow-md">
          <Carousel autoSlide={true}>
            {images.map((image, i) => (
              <img key={i} src={image} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default App;
