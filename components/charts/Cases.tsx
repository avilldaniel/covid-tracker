import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { options, data } from "../../lib/chartConfig";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Cases = () => {
  return (
    <div>
      {/* {country} */}
      <Line options={options} data={data} />
    </div>
  );
};

export default Cases;

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const res = await fetch(`https://api.covid19api.com/total/country/${params}`);
//   const data = await res.json();
//   return {
//     props: data,
//   };
// };
