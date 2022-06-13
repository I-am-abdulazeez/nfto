import { ImageSourcePropType } from "react-native";
import { NFTDataType } from "../types";

export interface FocusedStatusBarProps {
  backgroundColor: string;
}

export interface NTFCardProps {
  data: NFTDataType;
}

export interface CircleButtonProps {
  imageUrl: ImageSourcePropType;
  handlePress?: () => void;
  right: number;
  top: number;
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
