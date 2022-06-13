import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
} from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS } from "../constants";
import { CustRectButtonProps } from "../interfaces";

import { CircleButtonProps } from "../types";

const CircleButton: React.FC<CircleButtonProps> = ({
  imageUrl,
  handlePress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...rest,
      }}
    >
      <Image
        source={imageUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

const CustRectButton: React.FC<CustRectButtonProps> = ({
  minWidth,
  fontSize,
  handlePress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...rest,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

export { CircleButton, CustRectButton };
