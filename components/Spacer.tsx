import { View } from "react-native";
import React from "react";

type SpacerProps = {
  width?: number | `${number}%`;
  height?: number | `${number}%`;
};

const Spacer = ({ width = "100%", height = 40 }: SpacerProps) => {
  return <View style={{ width, height }} />;
};

export default Spacer;
