

function getAverage(testScoresArray) {
    let averageScore = 0;
    for (let num of testScoresArray) {
      averageScore += num;
    }
    averageScore = averageScore / testScoresArray.length
    return averageScore
  }
  
function getGrade(studentScore) {
    let gradeLetter
    if (studentScore < 60) {
      gradeLetter = "F"
    } else if (studentScore < 70) {
      gradeLetter = "D"
    } else if (studentScore < 80) {
      gradeLetter = "C"
    } else if (studentScore < 90) {
      gradeLetter = "B"
    } else if (studentScore < 100) {
      gradeLetter = "A"
    } else {
      gradeLetter = "A+"
    }
    return gradeLetter
}


function hasPassingGrade(studentScoreLetter) {
    if (typeof studentScoreLetter == "string") {
      return studentScoreLetter !== "F";
    }
    const score = getGrade(studentScoreLetter);
    return score !== "F";
}


function studentMsg(scoresArray, studentScore) {
    const averageScore = getAverage(scoresArray);
    const studentGrade = getGrade(studentScore)
    const passed = hasPassingGrade(studentGrade);
    if (passed){
      return `Class average: ${averageScore}. Your grade: ${studentGrade}. You passed the course.`
    }
    return `Class average: ${averageScore}. Your grade: ${studentGrade}. You failed the course.`
}