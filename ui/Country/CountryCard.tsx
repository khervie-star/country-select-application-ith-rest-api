import Image from "next/image";
import Link from "next/link";
import React from "react";

const CountryCard = ({
  Flag,
  Population,
  Capital,
  Region,
  Name,
  onClick,
}: any) => {
  return (
    <Link href={`/` + Name}>
      <div className="rounded-[8px] flex flex-col bg-white dark:bg-[#2b3945] h-[350px] cursor-pointer shadow-md">
        <div className="bg-transparent h-[150px] relative">
          <Image src={Flag} fill alt="" />
        </div>
        <div className="p-[1em]">
          <div className="font-bold my-[1em] text-[18px] text-[#111517] dark:text-[#fff]">
            {Name}
          </div>
          <div className="text-[#111517] dark:text-[#fff]">
            <div className="font-lighter text-[14px] my-[0.5em]">
              Population:{" "}
              <span className="font-normal text-[14px]">{Population}</span>
            </div>
            <div className="font-lighter text-[14px] my-[0.5em]">
              Region: <span className="font-normal text-[14px]">{Region}</span>
            </div>
            <div className="font-lighter text-[14px] my-[0.5em]">
              Capital:{" "}
              <span className="font-normal text-[14px]">{Capital}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
