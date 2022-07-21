import { ILayoutProps } from "../lib/interfaces";
import Meta from "./Meta";

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <Meta />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
