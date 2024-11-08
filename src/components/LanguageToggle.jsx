/* eslint-disable react/prop-types */
//import { useState } from "react";

export default function LanguageToggle({
  languageToggle,
  handleLanguageEN,
  handleLanguageES,
  isOpen,
}) {
  const isOpenStyle = isOpen
    ? "w-[12rem] h-[3rem] ml-[2.5rem] flex text-center content-center items-center rounded-full mdm:pt-4"
    : "w-[12rem] h-[3rem] ml-[2.5rem] flex text-center content-center items-center rounded-full mdm:pt-4 mdm:hidden";
  return (
    <>
      <div className={isOpenStyle}>
        <div className="w-full h-[3rem] flex rounded-full items-center content-center">
          <div className="relative w-full rounded-full h-[3rem] p-1 b-[1px] flex">
            <div className="relative w-full h-full flex items-center">
              <div
                className="flex w-[8rem] justify-center cursor-pointer pl-2"
                onClick={handleLanguageEN}
              >
                <button
                  className={`mr-2 text-[1rem] z-50 ${
                    !languageToggle ? "text-[#7f858f]" : "null"
                  }`}
                >
                  EN
                </button>
                <img
                  className={`${languageToggle ? "null" : "opacity-50"}`}
                  width="26"
                  height="26"
                  src="https://img.icons8.com/color/48/great-britain-circular.png"
                  alt="great-britain-circular"
                />
              </div>
              <div
                className="flex w-[8rem] justify-center cursor-pointer pr-2"
                onClick={handleLanguageES}
              >
                <button
                  className={`mr-2 text-[1rem] z-50 ${
                    languageToggle ? "text-[#7f858f]" : "null"
                  }`}
                >
                  ES
                </button>
                <img
                  className={`${languageToggle ? "opacity-50" : "null"}`}
                  width="26"
                  height="26"
                  src="https://img.icons8.com/color/48/spain2-circular.png"
                  alt="spain2-circular"
                />
              </div>
            </div>

            <span
              className={`border border-[#c8891d] shadow flex items-center justify-center w-[50%] rounded-full h-[2.3rem] top-[5px]  absolute -z-[12] ${
                languageToggle ? "left-[7px]" : "right-[7px]"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
}
