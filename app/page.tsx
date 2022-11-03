"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import CountryCard from "../ui/Country/CountryCard";
import Input from "../ui/Input";
import Sort from "../ui/Sort";
import styles from "./page.module.css";
import _ from "lodash";
import { useSearchParams } from "next/navigation";

type cardTypes = {
  population?: any;
  region?: string;
  capital?: string;
  name?: Array<{ official: string; common: string }>;
  flags?: Array<{ png: string; svg: string }>;
  official?: string;
  common?: string;
  png?: string;
  svg?: string;
};

type ox = {
  region?: string;
};
export default function Home() {
  const [data, setData] = useState<cardTypes[]>([]);
  const [filteredItems, setFilteredItems] = useState<cardTypes[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setFilteredItems(data);
        setLoading(false);
      });
  }, []);

  const handleSortChange = (e: any) => {
    console.log(e.target.value);
    setFilteredItems(
      _.filter(data, function (o: ox) {
        return o?.region.includes(e.target.value);
      })
    );
  };

  const handleInputChange = (e: { target: { value: any } }) => {
    console.log(e.target.value);
    setFilteredItems(
      _.filter(filteredItems, function (o) {
        return o.name?.official
          ?.toLowerCase()
          .includes(e.target.value?.toLowerCase());
      })
    );
  };

  return (
    <div className="w-screen px-[3em] pt-[4em]">
      <div className="w-full flex justify-between my-[3em]">
        <Input onChange={handleInputChange} />
        <Sort onChange={handleSortChange} />
      </div>
      <main>
        {!isLoading &&
          data &&
          true &&
          filteredItems.map((country, i) => (
            <div className="country-section" key={i}>
              <CountryCard
                Population={country.population}
                Region={country.region}
                Capital={country.capital}
                Name={country.name?.official || country.name?.common}
                Flag={country.flags?.png || country.flags?.svg}
              />
            </div>
          ))}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center"
        >
          <span className={styles.logo}>&copy; 2022</span>
          {". "}
          <span>Khervie00</span>
        </a>
      </footer>
    </div>
  );
}
