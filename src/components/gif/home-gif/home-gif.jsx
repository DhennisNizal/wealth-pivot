import React from "react";
import Lottie from "lottie-react";
import GIF from "../../../assets/growth chart.json";
import { Wrapper } from "./styles";

const HomeGIF = () => {
  return (
    <Wrapper>
      <Lottie animationData={GIF} loop={true} />
    </Wrapper>
  );
};

export default HomeGIF;
