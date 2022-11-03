import React from "react";
import { region, regions } from "../lib/data";

const Sort = ({ onChange }: any) => {
  return (
    <div>
      <select
        onChange={onChange}
        className="bg-white dark:bg-[#2b3945] shadow-md font-semibold text-[#111517] dark:text-white w-full rounded-lg focus:border-0 focus:outline-none hover:outline-none hover:border-0"
      >
        <option
          selected
          disabled
          hidden
          style={{ display: "none" }}
          className="font-medium px-[0.7em] py-[1em] text-[#111517] dark:text-white"
        >
          Filter by Region
        </option>
        {regions.map((region, i) => (
          <option
            value={region.filterItem}
            key={i}
            className="font-medium px-[0.7em] py-[1em] text-[#111517] dark:text-white"
          >
            {region.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
