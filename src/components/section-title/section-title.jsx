import React from "react";
import { SectionTitleWrapper } from "./styles";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <SectionTitleWrapper>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
