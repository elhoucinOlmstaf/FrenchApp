import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Audio } from "expo-av";
import NumbersData from "../../Data/NumbersData/NumbersData";
import { AntDesign } from "@expo/vector-icons";
import GeneralStyles from "../../styles/GeneralStyles";
const NumbersComp = () => {
  let [Sound, setSound] = useState();
  //play audio sound function
  const PlayAudio = async (item) => {
    const { sound } = await Audio.Sound.createAsync(item);
    setSound(sound);
    await sound.playAsync();
  };
  useEffect(() => {
    return Sound
      ? () => {
          Sound.unloadAsync();
          console.log('unloading')
        }
      : undefined;
  }, [Sound]);
  return (
    <View style={{ width: width, height: height, backgroundColor: "#1f233c" }}>
      <Button title="Practice" color="orange" />
      <View>
        <FlatList
          data={NumbersData}
          keyExtractor={(item) => item.Ar_name}
          contentContainerStyle={{ paddingBottom: 95 }}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "#626479",
                  borderBottomWidth: 1,
                  marginHorizontal: 14,
                }}
              >
                <View style={{ padding: 10 }}>
                  <Text style={GeneralStyles.TextTitle}>{item.Fr_name}</Text>
                  <Text
                    style={{
                      ...GeneralStyles.TextTitle,
                      ...{ color: "#13a2a6", textAlign: "left", marginTop: 10 },
                    }}
                  >
                    {item.Ar_name}
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    marginHorizontal: 14,
                  }}
                >
                  <TouchableOpacity onPress={() => PlayAudio(item.Audio)}>
                    <AntDesign name="play" size={35} color="tomato" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
export default NumbersComp;
