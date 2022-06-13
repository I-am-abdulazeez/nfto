import { ImageSourcePropType } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";

import { NFTDataType, StackParams } from "../types";

export interface FocusedStatusBarProps {
  backgroundColor: string;
}

export interface NTFCardProps {
  data: NFTDataType;
}

export interface CircleButtonDefaultProps {
  imageUrl: ImageSourcePropType;
  handlePress?: () => void;
  top?: number;
}

export interface ImageCmpProps {
  imageUrl: ImageSourcePropType;
  index: number;
}

export interface NFTTileProps {
  title: string;
  subTitle: string;
  titleSize: number;
  subTitleSize: number;
}

export interface EthPriceProps {
  price: number;
}

export interface CustRectButtonProps {
  minWidth: number;
  fontSize: number;
  handlePress?: () => void;
}

export interface DetailsBidProps {
  bid: {
    id: string;
    name: string;
    price: number;
    image: ImageSourcePropType;
    date: string;
  };
}

export interface DetailsHeaderProps {
  data: NFTDataType;
  navigation: StackNavigationProp<StackParams, "Details", undefined>;
}
