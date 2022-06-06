import { View, Text, TouchableOpacity, Image } from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS } from "../constants";
import { CircleButtonProps } from "../interfaces";

const CircleButton: React.FC<CircleButtonProps> = ({
  imageUrl,
  handlePress,
  ...props
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
        ...props,
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

export { CircleButton };
