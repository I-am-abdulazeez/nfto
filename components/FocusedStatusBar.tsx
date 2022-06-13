import { StatusBar, StatusBarProps } from "react-native";

import { useIsFocused } from "@react-navigation/core";

import { FocusedStatusBarProps } from "../interfaces";

const FocusedStatusBar: React.FC<FocusedStatusBarProps & StatusBarProps> = ({
  backgroundColor,
  ...rest
}) => {
  const isFocused = useIsFocused();
  return isFocused ? (
    <StatusBar animated={true} backgroundColor={backgroundColor} {...rest} />
  ) : null;
};

export default FocusedStatusBar;
