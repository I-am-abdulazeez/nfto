import { useState } from "react";
import { Text, View, FlatList, SafeAreaView } from "react-native";

import { HomeHeader, NFTCard, FocusedStatusBar } from "../components";

import { COLORS, NFTData } from "../constants";

const Home: React.FC = () => {
  const [] = useState({});
  // "#772ea2"
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <View style={{ height: 300, backgroundColor: COLORS.primary }}></View>
        <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
