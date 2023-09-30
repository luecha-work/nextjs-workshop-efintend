import { NextPage } from "next";
import { Fragment } from "react";
import MainHeader from "./main-header";

import classec from "./main-header.module.css";

const Layout: NextPage<any> = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
