import { ImageSourcePropType } from "react-native";

export interface FocusedStatusBarProps {
  backgroundColor: string;
}

export interface NTFCardProps {
  data: {
    id: string;
    name: string;
    creator: string;
    price: number;
    description: string;
    image: ImageSourcePropType;
    bids: {
      id: string;
      name: string;
      price: number;
      image: ImageSourcePropType;
      date: string;
    }[];
  };
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
