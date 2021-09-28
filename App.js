import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import StackApp from "./Src/Stack/StackApp";

export default function App() {
  return (
    <NativeBaseProvider>
      <StackApp />
    </NativeBaseProvider>
  );
}
