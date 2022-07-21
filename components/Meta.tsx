import Head from "next/head";
import { IMetaProps } from "../lib/interfaces";

const Meta = ({ keywords, description, title }: IMetaProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

Meta.defaultProps = {
  keywords: "COVID-19 Tracker, Pandemic, Health",
  description: "Fetch recent COVID-19 stats of a country.",
  title: "COVID-19 Tracker",
};

export default Meta;
