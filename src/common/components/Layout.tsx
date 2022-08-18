import React, { Fragment } from "react";
import Navbar from "./Navbar";
import { useSession, signOut } from "next-auth/react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />

      {children}
    </Fragment>
  );
};

export default Layout;
