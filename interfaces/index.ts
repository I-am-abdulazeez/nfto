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
