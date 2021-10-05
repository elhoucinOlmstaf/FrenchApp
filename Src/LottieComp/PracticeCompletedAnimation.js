import { Dimensions, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import LottieView from "lottie-react-native";
import React  , {useState , useEffect}from "react";
const { width, height } = Dimensions.get("window");
import { Center, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const PracticeCompletedAnimation = (props) => {
  const navigation = useNavigation();
  let [CompleteAudio, setCompleteAudio] = useState();
  let [Score , setScore] = useState(props.score)
  const CompletAudioF = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../Audios/PracticeSounds/lesson_complete.mp3")
    );
    setCompleteAudio(sound);
    await sound.playAsync();
  };
  console.log(Score)

 const MoveBack = ()=>{
  navigation.push("AlphabetPracticeCategory")

 }

  useEffect(() => {
    CompletAudioF()
  }, [])
  return (
    <>
      <Center pt="10">
        <Text color="tomato" fontSize="4xl" bold>
          مبروك
        </Text>
        <Text color="tomato" fontSize="3xl" bold>
          لقد أنهيت الأختبار
        </Text>
      </Center>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LottieView
          style={{
            width: width / 2,
            height: height / 2,
          }}
          autoPlay
          source={require("../LottieFiles/session_complete_vikram_duo.json")}
        />
      </View>
      <View style={{ position: "absolute", bottom: 15, alignSelf: "center" }}>
        <View
          style={{
            backgroundColor: "tomato",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 15,
            borderRadius: 15,
            width: width / 1.1,
            alignSelf: "center",
            marginVertical: 20,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
            Practice XP
          </Text>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              style={{ marginRight: 8 }}
              name="star-four-points"
              size={30}
              color="yellow"
            />
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              {props.score}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => MoveBack()}
          style={{
            backgroundColor: "skyblue",
            flexDirection: "row",
            justifyContent: "center",
            padding: 15,
            borderRadius: 15,
            width: width / 1.1,
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PracticeCompletedAnimation;
