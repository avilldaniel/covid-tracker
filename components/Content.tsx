import { GetServerSideProps } from "next";
import Deaths from "./charts/Deaths";
import Cases from "./charts/Cases";
import { IContentProps } from "../lib/interfaces";

const Content = ({ countryInfo, country }: IContentProps) => {
  // console.log("in Content, countryInfo:", countryInfo);
  return (
    <div>
      {countryInfo ? (
        <div>
          <Deaths />
          <Cases />
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
