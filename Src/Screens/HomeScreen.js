import { Dimensions, StyleSheet, BackHandler, View , Alert} from "react-native";

import HomeScreenHeader from "../Components/HomeScreenHeader";
import HomeScreenSections from "../Components/HomeScreenSections";
import React , {useEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to go back?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{ backgroundColor: "#1f233c", width: width, height: height }}
      >

        <HomeScreenHeader />
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        />
        <HomeScreenSections />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  Container: {
    width: width,
    backgroundColor: "red",
    height: 30,
  },
});
