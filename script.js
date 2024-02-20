//function for calculating GPA and displaying GPA
const calculateGPA = () => {
    //get reference to eveery row in the form where data inputed
    const rows = document.getElementsByClassName('data')
    //setting up variables to store credits, earned credits, and gpa
    let earnedUWCredits = 0;
    let earnedWCredits = 0;
    let totalCredits = 0;
    let uwGPA = null
    let wGPA = null

    //loop for looping through every row in the rows array
    for(let i = 0; i < rows.length; i++) {
        const row = rows[i]
        //get values of grade user inputed, the class's credits, and the classes weightage
        const grade = row.querySelector('.gradeInput')
        const credits = row.querySelector('.creditsInput')
        const weight = row.querySelector('.weightInput')
        //objects for storing scores and their corresponding letter grades for non weighted and weighted
        const scale = {'A': 4, 'B': 3, 'C': 2, 'D': 1, 'F': 0}
        const weightedScale = {'A': 5, 'B': 4, 'C': 3, 'D': 2, 'F': 0}
        //initialization of variables that will be used to check row's completion and weightage
        let rowCompleted = null
        let weighted = false;
        //changes value of weighted if class is weighted
        if(weight.value === '5.0') {
            weighted = true
        }
        //determines if the row has enough data for the gpa to be calculated
        if(credits.value && grade.value && weight.value) {
            rowCompleted = true
        }
        //adds values to total credits and total earned credits if row has enough data
        if(rowCompleted) {
            gradeValue = grade.value
            creditsValue = credits.value 
            //if correct value for grade of a class has been inputed, the value of the grade is added to the earned credits
            if(scale[gradeValue]) {
              earnedUWCredits += scale[gradeValue] * parseFloat(creditsValue);
              //if the class weighted, also adds value of grade according to weighted standards to earned weighted credits
              if(weighted) {
                earnedWCredits += weightedScale[gradeValue] * parseFloat(creditsValue);
              } else{
                earnedWCredits += scale[gradeValue] * parseFloat(creditsValue);
              }
            }
          //adds to the total credits based on how many credits the class is worth
          totalCredits += parseFloat(creditsValue)
        }
    }

    //calculates unweighted and weighted gpa if the values needed to calculate gpa are present
    if(earnedUWCredits && earnedWCredits && totalCredits) {
        uwGPA = (earnedUWCredits/totalCredits).toFixed(2)
        wGPA = (earnedWCredits/totalCredits).toFixed(2)
    }

    //if the GPAs have been calculated, display them
    if(uwGPA && wGPA) {
        document.getElementById('uwGPA').innerText = (uwGPA)
        document.getElementById('wGPA').innerText = (wGPA)
    }
}

//function for resetting values of the form
const reset = () => {
    document.getElementById('GPAInput').reset()
    document.getElementById('uwGPA').innerHTML = '';
    document.getElementById('wGPA').innerHTML = '';
}