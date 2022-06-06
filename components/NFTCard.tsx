import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SHADOWS, COLORS, SIZES, assets } from "../constants";

interface NTFCardProps {
  data: {};
}

const NFTCard: React.FC<NTFCardProps> = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <Text>NFTCard</Text>
    </View>
  );
};

export default NFTCard;
