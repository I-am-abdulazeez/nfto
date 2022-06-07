import { Image, Text, View } from "react-native";
import { assets, SIZES } from "../constants";
import { ImageCmpProps } from "../interfaces";

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

const ImageCmp: React.FC<ImageCmpProps> = ({ imageUrl, index }) => {
  return (
    <Image
      source={imageUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

const People: React.FC = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imageUrl, index) => (
          <ImageCmp imageUrl={imageUrl} index={index} key={`People-${index}`} />
        )
      )}
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
      <People />
      <EndDate />
    </View>
  );
};

export { NFTTitle, EthPrice, ImageCmp, People, EndDate, SubInfo };
