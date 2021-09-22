if (passedData === "part 1" &&CurrentQuestion === QuestionData.length - 1) {
  if(PART1 == 33.33){
    setScore(5)
  }else if(PART1 === 22.66){
    setScore(4)
  }else {
    if (score >= 1 && score <= 2) {
      let PartOne = JSON.stringify(11.33);
      AsyncStorage.setItem("Part1", PartOne);
    }
    if (score >= 3 && score <= 4) {
      let PartOne = JSON.stringify(22.66);
      AsyncStorage.setItem("Part1", PartOne);
    }
    if (score === 5) {
      let PartOne = JSON.stringify(33.33);
      AsyncStorage.setItem("Part1", PartOne);
    }
  }


}
if(passedData === "part 2" &&CurrentQuestion === QuestionData.length - 1){
  if(PART1 == 66.66){
    setScore(5)
  } if(PART1 == 55.55){
    setScore(5)
  }
   if(PART1 == 33.33 || PART3 == 33.33 ){
    if (score >= 1 && score <= 2) {
      let PartTwo = JSON.stringify(44.44);
      AsyncStorage.setItem("Part2", PartTwo);
    }
    if (score >= 3 && score <= 4) {
      let PartTwo = JSON.stringify(55.55);
      AsyncStorage.setItem("Part2", PartTwo);
    }
    if (score === 5) {
      let PartTwo = JSON.stringify(66.66);
      AsyncStorage.setItem("Part2", PartTwo);
    }
   }
}