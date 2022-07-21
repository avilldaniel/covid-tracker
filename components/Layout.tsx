import Head from "next/head";
import { ILayoutProps } from "../lib/interfaces";
import Search from "./Search";
import { GetStaticProps } from "next";

const Layout = ({ children }: ILayoutProps) => {
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
