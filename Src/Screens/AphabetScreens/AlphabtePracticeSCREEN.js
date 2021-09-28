import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Center, Text, Progress, VStack, Icon } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import AlphabetData from "../../Data/AlphabetData";
const AlphabtePracticeSCREEN = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.Header}>
          <Center p="5">
            <Text color="white" fontSize="xl" bold>
              Tap The Letter You Hear :
            </Text>
          </Center>
          <View style={{ alignItems: "center" }}>
            <Center
              w="120px"
              h="120px"
              bg="tomato"
              style={{ borderRadius: 80 }}
            >
              <AntDesign name="caretright" size={90} color="yellow" />
            </Center>
          </View>
          <View>
            <VStack mt="7">
              <Progress size="xl" mb={4} value={65} />
            </VStack>
          </View>
        </View>
        <View style={styles.Body}>
          {AlphabetData[2].options.map((option, index) => (
            <View>
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                {option}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AlphabtePracticeSCREEN;
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: "#1f233c",
  },
  Header: {
    backgroundColor: "brown",
    width: width,
    padding: height - height + 20,
  },
  Body: {
    backgroundColor: "green",
    width: width,
    height: height / 2,
  },
});
