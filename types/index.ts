import { StackScreenProps } from "@react-navigation/stack";
import { ImageSourcePropType } from "react-native";
import { NFTData } from "../constants";

export type NFTDataType = {
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

export type StackParams = {
  Home: undefined;
  Details: {
    route: undefined;
    navgation: undefined;
    data: NFTDataType;
  };
};

export type DetailsProps = StackScreenProps<StackParams, "Details">;
