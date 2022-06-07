import { Image, Text, View } from "react-native";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import { ImageCmpProps, NFTTileProps } from "../interfaces";

const NFTTitle: React.FC<NFTTileProps> = ({
  title,
  subTitle,
  titleSize,
  subTitleSize,
}) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        {subTitle}
      </Text>
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
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        12h 30m
      </Text>
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
