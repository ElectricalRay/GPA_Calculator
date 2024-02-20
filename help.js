const grade = () => {
    const percent = document.getElementById('percent').value;
    const grade = document.getElementById('letterGrade');
    let letterGrade = null;
    if(percent > 99){
      letterGrade = 'A+';
    } else if(percent >= 94) {
      letterGrade = 'A';
    } else if(percent >= 90) {
      letterGrade = 'A-';
    } else if(percent >= 87) {
      letterGrade = 'B+';
    } else if(percent >= 83) {
      letterGrade = 'B';
    } else if(percent >= 80) {
      letterGrade = 'B-';
    } else if(percent >= 77) {
      letterGrade = 'C+';
    } else if(percent >= 73) {
      letterGrade = 'C';
    } else if(percent >= 70) {
      letterGrade = 'C-';
    } else if(percent >= 67) {
      letterGrade = 'D+';
    } else if(percent >= 63) {
      letterGrade = 'D';
    } else if(percent < 63) {
      letterGrade = 'F'
    }
    grade.innerText = letterGrade;
  }