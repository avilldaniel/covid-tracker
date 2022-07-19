import { useState } from "react";
import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Content from "../components/Content";
import { ICountries, ICountry, IRecentStats } from "../lib/interfaces";
import Search from "../components/Search";

const Home: NextPage = ({
  countries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [country, setCountry] = useState<string | null>(null);
  const [countryInfo, setCountryInfo] = useState<IRecentStats[] | undefined>(
    undefined
  );
  // console.log("countryInfo:", countryInfo?.length);
  // const pastWeekStats = (countryInfo: ICountry[]) => {
  //   for (let i = countryInfo?.length - 1; i >= countryInfo?.length - 7; i--) {
  //     console.log("countryInfo[i]:", countryInfo[i]);
  //   }
  // };

  return (
    <div className={styles.container}>
      <Head>
        <title>COVID Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search
        countries={countries}
        setCountry={setCountry}
        setCountryInfo={setCountryInfo}
      />
      {country ? <Content /> : null}
    </div>
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
