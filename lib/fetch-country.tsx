import { GetServerSideProps } from "next";

export const getServerSideCountry: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`https://api.covid19api.com/total/country/${params}`);
  const day = await res.json(); // day = [day1 stats, day2 stats, ...]
  return {
    props: day,
  };
};
