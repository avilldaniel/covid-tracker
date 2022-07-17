import { GetStaticProps } from "next";

export const getStaticCountries: GetStaticProps = async () => {
  const res = await fetch("https://api.covid19api.com/countries");
  const countries = await res.json(); // countries[]
  return {
    props: countries,
  };
};
