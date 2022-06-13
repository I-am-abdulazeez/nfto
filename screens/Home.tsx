import { useState } from "react";
import { View, FlatList, SafeAreaView } from "react-native";

import FocusedStatusBar from "../components/FocusedStatusBar";
import HomeHeader from "../components/HomeHeader";
import NFTCard from "../components/NFTCard";

import { COLORS, NFTData } from "../constants";

const Home: React.FC = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value: string) => {
    if (!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) setNftData(filteredData);
    else setNftData(NFTData);
  };
  // "#772ea2"
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            removeClippedSubviews={true}
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
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
