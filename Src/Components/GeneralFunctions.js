import React, { useState } from "react";
import { View, Text } from "react-native";
import { Audio } from "expo-av";

//play correct sound
const Correct_Sound = async () => {
  let [Sound, setSound] = useState();
  const { sound } = await Audio.Sound.createAsync(
    require("../Audios/PracticeSounds/right_answer.mp3")
  );
  setSound(sound);
  await sound.playAsync();
};

//play wrong sound
const WrongAudioF = async () => {
  let [Sound, setSound] = useState();
  const { sound } = await Audio.Sound.createAsync(
    require("../Audios/PracticeSounds/lesson_failed.mp3")
  );
  setSound(sound);
  await sound.playAsync();
};

export default { Correct_Sound, WrongAudioF };
