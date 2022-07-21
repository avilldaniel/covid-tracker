import { useState } from "react";
import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { ICountries, IRecentStats } from "../lib/interfaces";
import Search from "../components/Search";

const Home: NextPage = ({
  countries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [country, setCountry] = useState<string | null>(null);
  const [countryInfo, setCountryInfo] = useState<IRecentStats[] | undefined>(
    undefined
  );

  return (
    <main>
      <h1>COVID-19 Tracker</h1>
      <Search
        countries={countries}
        setCountry={setCountry}
        setCountryInfo={setCountryInfo}
        country={country}
        countryInfo={countryInfo}
      />
    </main>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://api.covid19api.com/countries");
  const countries: ICountries[] = await res.json(); // countries[]
  return {
    props: {
      countries,
    },
  };
};
