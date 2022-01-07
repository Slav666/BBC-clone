import React from "react";
import TopFooterSection from "./TopFooterSection";
import MiddleFooterSection from "./MiddleFooterSection";
import BottomFooterSection from "./BottomFooterSection ";
import { makeStyles } from "@material-ui/core/styles";

const FooterLayout = () => {
  return (
    <div style={{ width: "100vw" }}>
      <TopFooterSection style={{ maxWidth: "100%" }} />
      <MiddleFooterSection />
      <BottomFooterSection />
    </div>
  );
};

export default FooterLayout;
