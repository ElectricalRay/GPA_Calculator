//function for calculating letter grade from percentage
const grade = () => {
  //get references to input element and element where letter grade shown
  const percent = document.getElementById("percent").value;
  const grade = document.getElementById("letterGrade");
  //initialize variable that will contain letter grade
  let letterGrade = null;
  //checks percentage, and assigns appropriate letter grade to variable
  if (percent > 99) {
    letterGrade = "A+";
  } else if (percent >= 94) {
    letterGrade = "A";
  } else if (percent >= 90) {
    letterGrade = "A-";
  } else if (percent >= 87) {
    letterGrade = "B+";
  } else if (percent >= 83) {
    letterGrade = "B";
  } else if (percent >= 80) {
    letterGrade = "B-";
  } else if (percent >= 77) {
    letterGrade = "C+";
  } else if (percent >= 73) {
    letterGrade = "C";
  } else if (percent >= 70) {
    letterGrade = "C-";
  } else if (percent >= 67) {
    letterGrade = "D+";
  } else if (percent >= 63) {
    letterGrade = "D";
  } else if (percent < 63) {
    letterGrade = "F";
  }
  //display letter grade in grade element
  grade.innerText = letterGrade;
};
