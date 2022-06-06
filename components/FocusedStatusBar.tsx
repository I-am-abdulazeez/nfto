import { StatusBar } from "react-native";

import { useIsFocused } from "@react-navigation/core";

import { FocusedStatusBarProps } from "../interfaces";

const FocusedStatusBar: React.FC<FocusedStatusBarProps> = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
