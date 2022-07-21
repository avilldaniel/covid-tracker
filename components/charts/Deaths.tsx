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
import { templateOptions, templateData } from "../../lib/chartConfig";
import { IDeathsProps, IDeathsData } from "../../lib/interfaces";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Deaths = ({ country, countryInfo }: IDeathsProps) => {
  // overwrite chart options configuration
  const range: number[] | undefined = countryInfo?.map(
    (country) => country.Deaths ?? 0
  );
  const deathsOptions = {
    ...templateOptions,
    scales: {
      y: {
        suggestedMin: range ? Math.min(...range) - 1000 : 0,
        suggestedMax: range ? Math.max(...range) + 1000 : 0,
      },
    },
    plugins: {
      ...templateOptions.plugins,
      title: {
        ...templateOptions.plugins.title,
        text: "Total deaths",
      },
    },
  };
  const labels: string[] = [];
  const deathsLabels: IDeathsData[] = [];
  for (let i = 6; i >= 0; i--) {
    const day = new Date();
    day.setDate(day.getDate() - (i + 1));
    labels.push(day.toLocaleDateString());
    deathsLabels.push({
      label: `${day}`,
      deaths: countryInfo ? countryInfo[i].Deaths : 0,
    });
  }
  // console.log("deathsLabels[]:", deathsLabels);
  const deathsData = {
    labels,
    datasets: [
      {
        ...templateData.datasets[0],
        label: "Deaths",
        data: deathsLabels.map((label) => label.deaths),
        borderColor: "rgb(255, 99, 132)",
      },
    ],
  };
  // console.log("deathsOptions:", deathsOptions);
  // console.log("deathsData:", deathsData);
  // console.log("templateData:", templateData);
  return (
    <div className="chart">
      <Line options={deathsOptions} data={deathsData} />
    </div>
  );
};

export default Deaths;
