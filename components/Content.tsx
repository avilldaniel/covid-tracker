import { GetServerSideProps } from "next";
import Deaths from "./charts/Deaths";
import Cases from "./charts/Cases";

const Content = () => {
  return (
    <div>
      <Deaths />
      <Cases />
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
