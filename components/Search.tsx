import { useState } from "react";
import { TextField, Autocomplete } from "@mui/material";
import { ISearchProps, ICountry, IRecentStats } from "../lib/interfaces";
import Content from "./Content";

const Search = ({
  countries,
  setCountry,
  setCountryInfo,
  country,
  countryInfo,
}: ISearchProps) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const countryList = countries.map((country) => {
    return `${country.Country}`;
  });

  const fetchCountryInfo = async (country: string | null) => {
    const res = await fetch(
      `https://api.covid19api.com/total/country/${country}`
    );
    const countryData = await res.json();
    const recentStats = pastWeekStats(countryData);

    setCountryInfo(recentStats);
    setDataLoaded(true);
  };

  const pastWeekStats = (
    countryInfo: ICountry[]
  ): IRecentStats[] | undefined => {
    const statsArr: IRecentStats[] | undefined = [];

    // console.log("countryInfo:", countryInfo);
    // if country has no info (ex. returns []), return undefined
    if (countryInfo[0] === undefined) return undefined;

    for (let i = countryInfo?.length - 1; i >= countryInfo?.length - 7; i--) {
      // console.log("countryInfo[i]:", countryInfo[i]);
      statsArr.push({
        Confirmed: countryInfo[i].Confirmed,
        Deaths: countryInfo[i].Deaths,
      });
    }
    // console.log(`total pastWeekStats for ${countryInfo[0].Country}:`, statsArr);
    return statsArr;
  };

  return (
    <>
      <Autocomplete
        // value={null} not needed since our setCountry pushes country back to index.tsx
        onChange={(event: any, newValue: string | null) => {
          setCountry(newValue);
          fetchCountryInfo(newValue);
        }}
        disablePortal
        id="country-select"
        options={countryList}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Country" />}
      />

      {dataLoaded && country && (
        <div>
          <Content countryInfo={countryInfo} country={country} />
          <p className="collected">
            Data collected from the{" "}
            <a href="https://covid19api.com/">COVID-19 API</a>
          </p>
        </div>
      )}
    </>
  );
};

export default Search;
