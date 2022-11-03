"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import BackButton from "../../ui/BackButton";

type countryDataTypes = {
  flags?: Array<{ png: string; svg: string }>;
  name?: string;
  nativeName?: string;
  topLevelDomain?: Array<any>;
  population?: any;
  region?: string;
  capital?: string;
  subregion?: string;
  languages?: Array<any>;
  currrencies?: Array<any>;
  borders?: Array<any>;
};

const Country = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id: string };
}) => {
  const router = useRouter();
  const [data, setData] = useState<countryDataTypes[]>([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [county, setCountryName] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.com/v2/name/${params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setFilteredItems(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="px-[3em] py-[5.5em] w-screen">
        <div>
          <BackButton />
        </div>
        {!isLoading && (
          <div className="flex flex-col md:flex-row gap-[6em]  my-12">
            <div className="md:basis-1/2 relative w-full flex-1">
              <Image src={data[0]?.flags.png} fill alt="" />
              <div className="w-full bg-red-500 h-[400px] shadow-sm" />
            </div>
            <div className="md:basis-1/2">
              <div>
                <h1 className="font-bold text-[24px] md:text-[32px] text-[#111517] dark:text-white mb-6 ">
                  {data[0]?.name}
                </h1>
                <div className="w-full">
                  <div className="flex justify-between items-center w-full my-2">
                    <div className="font-medium text-[14px] text-[#111517] dark:text-white">
                      Native Name:{" "}
                      <span className="font-extralight text-[11px] text-[#111517] dark:text-white">
                        {data[0]?.nativeName}
                      </span>
                    </div>
                    <div className="font-medium text-[14px] text-[#111517] dark:text-white">
                      Top Level Domain:{" "}
                      {data[0]?.topLevelDomain.map((tld, i) => (
                        <span
                          className="font-extralight text-[11px] text-[#111517] dark:text-white mx-1"
                          key={i}
                        >
                          {tld},
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center w-full my-2">
                    <div className="font-medium text-[14px] text-[#111517] dark:text-white">
                      Population:{" "}
                      <span className="font-extralight text-[11px] text-[#111517] dark:text-white">
                        {data[0]?.population}
                      </span>
                    </div>
                    <div className="font-medium text-[14px] text-[#111517] dark:text-white">
                      Currencies:{" "}
                      {data[0]?.currencies.map((currency, i) => (
                        <span
                          className="font-extralight text-[11px] text-[#111517] dark:text-white mx-1"
                          key={i}
                        >
                          {currency?.name},
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center w-full my-2">
                    <div className="font-medium text-[14px] text-[#111517] dark:text-white">
                      Region:{" "}
                      <span className="font-extralight text-[11px] text-[#111517] dark:text-white">
                        {data[0]?.region}
                      </span>
                    </div>
                    <div className="font-medium text-[14px] text-[#111517] dark:text-white">
                      Languages:{" "}
                      {data[0]?.languages.map((language, i) => (
                        <span
                          className="font-extralight text-[11px] text-[#111517] dark:text-white mx-1"
                          key={i}
                        >
                          {language?.name},
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center w-full my-2">
                    <div className="font-medium text-[14px] text-[#111517] dark:text-white">
                      Sub Region:{" "}
                      <span className="font-extralight text-[11px] text-[#111517] dark:text-white">
                        {data[0]?.subregion}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center w-full my-2">
                    <div className="font-medium text-[14px] text-[#111517] dark:text-white">
                      Capital:{" "}
                      <span className="font-extralight text-[11px] text-[#111517] dark:text-white">
                        {data[0]?.capital}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-start items-center mt-[5em]">
                    <div className="font-medium text-[14px] text-[#111517] dark:text-white">
                      Border Countries
                    </div>

                    {data[0]?.borders?.map((border, i) => (
                      <div
                        className="items-center justify-start rounded-md shadow-md bg-[#fff] dark:bg-[#2b3945] text-[#111517] dark:text-white py-[0.75em] px-[1.2em] text-[11px] font-extralight mx-2"
                        key={i}
                      >
                        {border}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Country;
