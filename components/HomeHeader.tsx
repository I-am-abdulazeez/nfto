import { View, Text, Image, TextInput } from "react-native";
import { COLORS, assets, FONTS, SIZES } from "../constants";

const HomeHeader: React.FC = () => {
  return (
    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image source={assets.logo} style={{ width: 90, height: 25 }} />
      </View>
    </View>
  );
};

export default HomeHeader;
