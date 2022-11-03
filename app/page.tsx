"use client";

import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import CountryCard from "../ui/Country/CountryCard";
import Input from "../ui/Input";
import Sort from "../ui/Sort";
import styles from "./page.module.css";
import _ from "lodash";

type cardTypes = {
  name: any;
  population: any;
  region: any;
  capital: any;
  flags: any;
};

type ox = {
  region?: string;
};
export default function Home() {
  const [data, setData] = useState([]);
  const [filteredItems, setFilteredItems] = useState<cardTypes[] | any>([]);
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
      _.filter(data, function name(o: any) {
        {
          return o?.region.includes(e.target.value);
        }
      })
    );
  };

  const handleInputChange = (e: { target: { value: any } }) => {
    console.log(e.target.value);

    const filtered = _.filter(
      filteredItems,
      function (o: { name: { official: string } }) {
        return o.name?.official
          ?.toLowerCase()
          .includes(e.target.value?.toLowerCase());
      }
    );

    setFilteredItems(filtered);
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
          filteredItems.map(
            (
              country: {
                population: any;
                region: any;
                capital: any;
                name: { official: any; common: any };
                flags: { png: any; svg: any };
              },
              i: React.Key | null | undefined
            ) => (
              <div className="country-section" key={i}>
                <CountryCard
                  Population={country.population}
                  Region={country.region}
                  Capital={country.capital}
                  Name={country.name?.official || country.name?.common}
                  Flag={country.flags?.png || country.flags?.svg}
                />
              </div>
            )
          )}
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
