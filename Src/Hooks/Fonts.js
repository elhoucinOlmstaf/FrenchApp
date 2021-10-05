import * as Font from "expo-font";

export default useFonts = async () => {
   await Font.loadAsync({
      "MontserratBold": require("../Fonts/beyond-wonderland.regular.ttf"),
      "BubbleLoveDemo": require("../Fonts/koowalsky.regular.ttf"),
      "wonderland": require("../Fonts/beyond-wonderland.regular.ttf"),
      "feast": require("../Fonts/feast-of-flesh-bb.italic.ttf"),
      "mummified": require("../Fonts/mummified.fill.ttf"),
      "regularregular": require("../Fonts/mummified.regular.ttf"),
      "youmurderer": require("../Fonts/youmurderer-bb.regular.ttf"),
      "sweetcandy": require("../Fonts/sweet-candy.regular.ttf"),
    });
};