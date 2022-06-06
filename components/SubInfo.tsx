import { Text, View } from "react-native";
import { SIZES } from "../constants";

const NFTTitle: React.FC = () => {
  return (
    <View>
      <Text>NTFTitle</Text>
    </View>
  );
};

const EthPrice: React.FC = () => {
  return (
    <View>
      <Text>EthPrice</Text>
    </View>
  );
};

const ImageCmp: React.FC = () => {
  return (
    <View>
      <Text>ImageCmp</Text>
    </View>
  );
};

const People: React.FC = () => {
  return (
    <View>
      <Text>People</Text>
    </View>
  );
};

const EndDate: React.FC = () => {
  return (
    <View>
      <Text>EndDate</Text>
    </View>
  );
};

const SubInfo: React.FC = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text>SubInfo</Text>
    </View>
  );
};

export { NFTTitle, EthPrice, ImageCmp, People, EndDate, SubInfo };
