// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
import { Line } from "react-chartjs-2";
import { options, data } from "./chartConfig";
import { GetServerSideProps } from "next";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

const Deaths = () => {
  return (
    <div>
      {/* {country} */}
      <Line options={options} data={data} />
    </div>
  );
};

export default Deaths;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`https://api.covid19api.com/total/country/${params}`);
  const data = await res.json();
  return {
    props: data,
  };
};
