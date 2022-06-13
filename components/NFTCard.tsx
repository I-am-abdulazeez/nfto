import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CircleButton, CustRectButton } from "./Button";
import { NFTTitle, EthPrice, SubInfo } from "../components/SubInfo";

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
      <SubInfo />

      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <CustRectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() =>
              navigation.navigate("Details" as never, { data } as never)
            }
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
