"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { FaAngleDown, FaSun, FaMoon } from "react-icons/fa";
import { BsFillCloudSunFill, BsFillCloudMoonFill } from "react-icons/bs";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "dark" ? systemTheme : theme;

  return (
    <>
      {currentTheme === "dark" ? (
        <button
          className={
            "bg-transparent border-0 flex items-center justify-center gap-2 cursor-pointer"
          }
          onClick={() => {
            setTheme("light");
          }}
        >
          <BsFillCloudSunFill className="icon cursor-pointer text-2xl text-gray-600 dark:text-gray-200" />
          <span className="text-[#111517] dark:text-white font-semibold">
            Light Mode
          </span>
        </button>
      ) : (
        <button
          className={
            "bg-transparent border-0 flex items-center justify-center gap-2 cursor-pointer"
          }
          onClick={() => {
            setTheme("dark");
          }}
        >
          <BsFillCloudMoonFill className="icon mx-4 cursor-pointer text-2xl text-gray-500 dark:text-gray-400" />
          <span className="text-[#111517] dark:text-white font-semibold">
            Dark Mode
          </span>
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
