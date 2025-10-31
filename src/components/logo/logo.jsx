import React from "react";
import { TextLogo } from "./styles";

const Logo = ({ fontSize }) => {
  return (
    <TextLogo fontSize={fontSize}>
      $<span className="wealth">WEALTH</span>
      <span className="pivot"> PIVOT</span>
    </TextLogo>
  );
};

export default Logo;
