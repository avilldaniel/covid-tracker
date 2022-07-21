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
import { IChartsProps, IChartsData } from "../../lib/interfaces";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Cases = ({ country, countryInfo }: IChartsProps) => {
  // overwrite chart options configuration
  const range: number[] | undefined = countryInfo?.map(
    (country) => country.Confirmed ?? 0
  );
  const casesOptions = {
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
        text: "Total cases",
      },
    },
  };
  const labels: string[] = [];
  const casesLabels: IChartsData[] = [];
  for (let i = 6; i >= 0; i--) {
    const day = new Date();
    day.setDate(day.getDate() - (i + 1));
    labels.push(day.toLocaleDateString());
    casesLabels.push({
      label: `${day}`,
      cases: countryInfo ? countryInfo[i].Confirmed : 0,
    });
  }
  // console.log("casesLabels[]:", casesLabels);
  const casesData = {
    labels,
    datasets: [
      {
        ...templateData.datasets[0],
        label: "Cases",
        data: casesLabels.map((label) => label.cases),
        borderColor: "rgb(65, 105, 225)",
      },
    ],
  };
  // console.log("casesOptions:", casesOptions);
  // console.log("casesOptions:", casesOptions);
  // console.log("templateData:", templateData);
  return (
    <div className="chart">
      <Line options={casesOptions} data={casesData} />
    </div>
  );
};

export default Cases;
