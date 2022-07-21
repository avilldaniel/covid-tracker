import { GetServerSideProps } from "next";
import Deaths from "./charts/Deaths";
import Cases from "./charts/Cases";
import { IContentProps } from "../lib/interfaces";

const Content = ({ countryInfo, country }: IContentProps) => {
  // console.log(`${country}'s`, "countryInfo:", countryInfo);
  return (
    <div className="container">
      {countryInfo ? (
        <div className="content">
          <Deaths country={country} countryInfo={countryInfo} />
          <Cases country={country} countryInfo={countryInfo} />
          <h2 className="grid-col-span-2 total">
            Total Cases confirmed:{" "}
            {countryInfo[countryInfo.length - 1].Confirmed.toLocaleString()}
          </h2>
        </div>
      ) : (
        <h3 className="unable">
          Unable to fetch data for {`${country}`}. <br /> Please select a
          different country.
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
