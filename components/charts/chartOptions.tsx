export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: true,
      text: "Total deaths in the past week",
      // position: "bottom",
      padding: 20,
      font: { size: 18 },
    },
  },
};
