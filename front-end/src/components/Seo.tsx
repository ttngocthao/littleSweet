import React from "react";
import { Helmet } from "react-helmet";
import TabIcon from "../images/icon.png";
interface Props{
  title?:string
}
const Seo = ({ title }:Props) => {
  return (
    <Helmet>
      <title>Little Sweet{title ? ` - ${title}` : ""}</title>
      <link rel="icon" type="image/icon" href={TabIcon} />
      {/* add some google font here if needed */}
    
    </Helmet>
  );
};

export default Seo;
