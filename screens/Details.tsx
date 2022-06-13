import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  StatusBar,
} from "react-native";
import { DetailsBid, FocusedStatusBar } from "../components";
import { CustRectButton, CircleButton } from "../components/Button";

import { FONTS, COLORS, SIZES, assets, SHADOWS } from "../constants";

import { DetailsHeaderProps } from "../interfaces";

import { DetailsProps } from "../types";

const DetailsHeader: React.FC<DetailsHeaderProps> = ({ data, navigation }) => {
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />

      <CircleButton
        left={15}
        imageUrl={assets.left}
        handlePress={() => navigation.goBack()}
        top={StatusBar?.currentHeight! + 15}
      />

      <CircleButton
        right={15}
        imageUrl={assets.left}
        top={StatusBar?.currentHeight! + 15}
      />
    </View>
  );
};

const Details: React.FC<DetailsProps> = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          zIndex: 1,
        }}
      >
        <CustRectButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
        />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={
          <>
            <DetailsHeader data={data} navigation={navigation} />
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Details;
