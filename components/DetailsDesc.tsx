import { useState } from "react";
import { View, Text } from "react-native";

import { EthPrice, NFTTitle } from "../components";

import { COLORS, SIZES, FONTS } from "../constants";
import { DetailsDescProps } from "../interfaces";

const DetailsDesc: React.FC<DetailsDescProps> = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    if (!readMore) {
      setText(data.description);
      setReadMore(true);
    } else {
      setText(data.description.slice(0, 100));
      setReadMore(false);
    }
  };

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
              onPress={handleReadMore}
            >
              {readMore ? " Show Less" : "Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
