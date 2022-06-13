import { useState } from "react";
import { View, Text } from "react-native";

import { EthPrice, NFTTitle } from "./SubInfo";

import { COLORS, SIZES, FONTS } from "../constants";

import { DetailsDescProps } from "../interfaces";

const DetailsDesc: React.FC<DetailsDescProps> = ({ data }) => {
  return (
    <>
      <View>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
    </>
  );
};

export default DetailsDesc;
