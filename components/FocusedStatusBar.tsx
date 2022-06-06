import { useIsFocused } from "@react-navigation/core";
import { StatusBar } from "react-native";

interface FocusedStatusBarProps {
  backgroundColor: string;
}

const FocusedStatusBar: React.FC<FocusedStatusBarProps> = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
