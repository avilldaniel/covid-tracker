import { faker } from "@faker-js/faker";

const labels: string[] = [];
for (let i = 6; i >= 0; i--) {
  const day = new Date();
  day.setDate(day.getDate() - (i + 1));
  labels.push(day.toLocaleDateString());
}

export const templateOptions = {
  interaction: { intersect: false },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: true,
      text: "Total <stats> in the past week",
      padding: 10,
      font: { size: 18 },
    },
  },
};

export const templateData = {
  labels,
  datasets: [
    {
      label: "<Label>",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
