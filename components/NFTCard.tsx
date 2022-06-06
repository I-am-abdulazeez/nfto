import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SHADOWS, COLORS, SIZES, assets } from "../constants";
import { NTFCardProps } from "../interfaces";
import { CircleButton } from "./Button";

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
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton imageUrl={assets.heart} right={10} top={10} />
      </View>
    </View>
  );
};

export default NFTCard;
