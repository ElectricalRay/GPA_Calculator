const calculateGPA = () => {
    const table = document.getElementById('inputTable')
    const rows = document.getElementsByClassName('data')
    let earnedUWCredits = 0;
    let earnedWCredits = 0;
    let totalCredits = 0;
    let uwGPA = null
    let wGPA = null

    for(let i = 0; i < rows.length; i++) {
        const row = rows[i]
        let rowCompleted = null
        const grade = row.querySelector('.grade')
        const credits = row.querySelector('.credits')
        const weight = row.querySelector('.weight')
        let weighted = false;
        if(weight.value === '5.0') {
            weighted = true
        }
        if(credits.value && grade.value && weight.value) {
            rowCompleted = true
        }
        if(rowCompleted) {
            if(grade.value === 'A+' || grade.value === 'A' || grade.value === 'A-') {
                earnedUWCredits += 4 * parseFloat(credits.value)
                if(weighted) {
                    earnedWCredits += 5 * parseFloat(credits.value)
                } else {
                    earnedWCredits += 4 * parseFloat(credits.value)
                }
            } else if(grade.value === 'B+' || grade.value === 'B' || grade.value === 'B-') {
                earnedUWCredits += 3 * parseFloat(credits.value)
                if(weighted) {
                    earnedWCredits += 4 * parseFloat(credits.value)
                } else {
                    earnedWCredits += 3 * parseFloat(credits.value)
                }
            } else if(grade.value === 'C+' || grade.value === 'C' || grade.value === 'C-') {
                earnedUWCredits += 2 * parseFloat(credits.value)
                if(weighted) {
                    earnedWCredits += 3 * parseFloat(credits.value)
                } else {
                    earnedWCredits += 2 * parseFloat(credits.value)
                }
            } else if(grade.value === 'D+' || grade.value === 'D') {
                earnedUWCredits += 1 * parseFloat(credits.value)
                if(weighted) {
                    earnedWCredits += 2 * parseFloat(credits.value)
                } else {
                    earnedWCredits += 1 * parseFloat(credits.value)
                }
            }
            totalCredits += parseInt(credits.value)
        }
    }

    if(earnedUWCredits && earnedWCredits && totalCredits) {
        uwGPA = (earnedUWCredits/totalCredits).toFixed(2)
        wGPA = (earnedWCredits/totalCredits).toFixed(2)
    }

    if(uwGPA && wGPA) {
        document.getElementById('uwGPA').innerText = (uwGPA)
        document.getElementById('wGPA').innerText = (wGPA)
    }
}

const reset = () => {
    document.getElementById('GPAInput').reset()
    document.getElementById('uwGPA').innerHTML = '';
    document.getElementById('wGPA').innerHTML = '';
}