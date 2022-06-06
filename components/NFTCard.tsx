import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SHADOWS, COLORS, SIZES, assets } from "../constants";
import { NTFCardProps } from "../interfaces";

const NFTCard: React.FC<NTFCardProps> = ({ data }) => {
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
      <View style={{ width: "100%", height: 250 }}>
        <Image source={data.image} />
      </View>
      <Text>NFTCard</Text>
    </View>
  );
};

export default NFTCard;
