import React from "react";
import { StatusBar, Text, View } from "react-native";

const ScreenWrapper = ({ children }) => {
  let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 30;
  return <View style={{ paddingTop: statusBarHeight }}>{children}</View>;
};

export default ScreenWrapper;
