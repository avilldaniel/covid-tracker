import { GetServerSideProps } from "next";
import Deaths from "./charts/Deaths";
import Cases from "./charts/Cases";
import { IContentProps } from "../lib/interfaces";

const Content = ({ countryInfo, country }: IContentProps) => {
  console.log(`${country}'s`, "countryInfo:", countryInfo);
  return (
    <div>
      {countryInfo ? (
        <div>
          <Deaths country={country} countryInfo={countryInfo} />
          <Cases country={country} countryInfo={countryInfo} />
          <h2>
            Total Cases confirmed{" "}
            {countryInfo[countryInfo.length - 1].Confirmed.toLocaleString()}
          </h2>
          <p>
            Data collected from the{" "}
            <a href="https://covid19api.com/">COVID-19 API</a>
          </p>
        </div>
      ) : (
        <h3>
          Unable to fetch data for {`${country}`}. <br /> Select a different
          country.
        </h3>
      )}
    </div>
  );
};

export default Content;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`https://api.covid19api.com/total/country/${params}`);
  const day = await res.json(); // day = [day1 stats, day2 stats, ...]
  return {
    props: day,
  };
};
