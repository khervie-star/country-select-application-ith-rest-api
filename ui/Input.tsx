import React from "react";
import { FaSearch } from "react-icons/fa";

const Input = ({ value, onChange }: any) => {
  return (
    <div className="border-0 px-[1em] bg-white dark:bg-[#2b3945] rounded-lg flex justify-start items-center gap-4 h-[45px] shadow-md">
      <div className="text-[#111517] dark:text-white">
        <FaSearch color="inherit" />
      </div>
      <input
        type="text"
        placeholder="Search for a country..."
        value={value}
        onChange={onChange}
        className="border-0 bg-transparent dark:text-[#858585] text-[#111517] hover:outline-none focus:outline-none focus:ring-0 hover:ring-0"
      />
    </div>
  );
};

export default Input;
