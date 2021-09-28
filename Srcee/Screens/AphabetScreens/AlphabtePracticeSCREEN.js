import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { AntDesign ,MaterialIcons} from "@expo/vector-icons";
import { Center, Text, Box  ,VStack ,Icon} from "native-base";

const AlphabtePracticeSCREEN = () => {
  return (
    <View
      style={styles.container}
    >
      <VStack space={1}  style={styles.Header}>
        <Center>
          <Text color="blue" fontSize="xl" bold>
            Tap The Letter You Hear :
          </Text>
          </Center>
          <Center w="40px" h="40px" bg="primary.400">
        <Icon as={<MaterialIcons name="audiotrack" />} color="white" size={6} />
      </Center>
      </VStack>
    </View>
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
    backgroundColor: "yellow",
    width: width,
  },
});
