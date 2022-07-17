import Head from "next/head";
import { LayoutProps } from "../interfaces";
import Search from "./Search";
import { GetStaticProps } from "next";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>temp</title>
      </Head>
      <Search />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

export const getStaticCountries: GetStaticProps = async () => {
  const res = await fetch("https://api.covid19api.com/countries");
  const countries = await res.json(); // countries[]
  return {
    props: countries,
  };
};
