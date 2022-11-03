"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();
  return (
    <div>
      <button
        className="flex gap-1 items-center justify-start rounded-md shadow-md bg-[#fff] dark:bg-[#2b3945] text-[#111517] dark:text-white px-[1.5em] py-[0.75em]"
        onClick={() => router.back()}
      >
        <FaArrowLeft />
        <span>Back</span>
      </button>
    </div>
  );
};

export default BackButton;
