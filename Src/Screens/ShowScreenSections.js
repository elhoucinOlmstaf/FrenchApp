import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AlphabetComp from "../Components/AlphabetComp";
import React from "react";

const ShowScreenSections = ({ route }) => {
  const passedData = route.params;
  if (passedData === "الاعداد") {
    return (
      <SafeAreaView>
        <View>
          <Text>ShowScreenSections</Text>
        </View>
      </SafeAreaView>
    );
  } else {
    return <AlphabetComp />;
  }
};

export default ShowScreenSections;

const styles = StyleSheet.create({});
