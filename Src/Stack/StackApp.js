import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../Screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import ShowScreenSections from "../Screens/ShowScreenSections";
import { createStackNavigator } from "@react-navigation/stack";
import AlphabetPracticeCategory from "../Screens/AphabetScreens/AlphabetPracticeCategory";
import AlphabtePracticeSCREEN from "../Screens/AphabetScreens/AlphabtePracticeSCREEN";
const Stack = createStackNavigator();


const StackApp = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AlphabetPracticeCategory"
          component={AlphabetPracticeCategory}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Ionicons
                onPress={() => navigation.navigate("ShowScreenSections")}
                name="md-arrow-back"
                size={30}
                color="black"
                style={{ marginLeft: 10, alignItems: "center", marginTop: 6 }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AlphabtePracticeSCREEN"
          component={AlphabtePracticeSCREEN}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ShowScreenSections"
          component={ShowScreenSections}
          options={({ route }) => ({
            title: route.params,
            headerStyle: {
              backgroundColor: "#1f233c",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackApp;
