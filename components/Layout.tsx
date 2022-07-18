import Head from "next/head";
import { LayoutProps } from "../lib/interfaces";
import Search from "./Search";
import { GetStaticProps } from "next";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>temp</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
