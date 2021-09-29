import React from "react";
import { Helmet } from "react-helmet";
import TabIcon from "../images/icon.png";
const Seo = ({ title }) => {
  return (
    <Helmet>
      <title>Little Sweet{title ? ` - ${title}` : ""}</title>
      <link rel="icon" type="image/icon" href={TabIcon} />
      {/* add some google font here if needed */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&display=swap" rel="stylesheet"/>
    </Helmet>
  );
};

export default Seo;
