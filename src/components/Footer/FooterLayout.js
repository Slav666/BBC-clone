import React from "react";
import TopFooterSection from "./TopFooterSection";
import MiddleFooterSection from "./MiddleFooterSection";
import BottomFooterSection from "./BottomFooterSection ";
import { makeStyles } from "@material-ui/core/styles";

// .bottom-nav {
//   background-color: #bb1919;
//   min-height: 10vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// }
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//     //  fontSize: "calc(10px + 2vmin)",
//     color: "white;",
//   },
// }));

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
