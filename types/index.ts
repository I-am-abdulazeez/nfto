import { StackScreenProps } from "@react-navigation/stack";

export type StackParams = {
  Home: undefined;
  Details: {
    route: undefined;
    navgation: undefined;
  };
};

export type DetailsProps = StackScreenProps<StackParams, "Details">;
