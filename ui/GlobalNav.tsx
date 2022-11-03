import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const GlobalNav = () => {
  return (
    <div className="flex flex-row h-[60px] w-screen items-center justify-between px-[3em] bg-white dark:bg-[#2b3945] shadow-md fixed z-[9999]">
      <div className="text-[24px] font-bold text-[#111517] dark:text-white ">
        <Link href={"/"}>Where in the world?</Link>
      </div>
      <div className="switch">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default GlobalNav;
