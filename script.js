function getAverage(scores) {
    var average = 0;
    for(let i = 0; i < scores.length; i++) {
        average += scores[i];
    }
    return average / scores.length;
}

function getGrade(score) {
    if(score === 100) {
        return "A++";
    } else if(score >= 90 || score === 99 ) {
        return "A";
    } else if(score >= 80 || score === 89) {
        return "B";
    } else if(score >= 70 || score === 79) {
        return "C";
    } else if(score >= 60 || score === 69) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    
    if(getGrade(score) !== "F") {
        return true;
    } else {
        return false;
    }
}

function studentMsg(totalScores, studentScore) {
    if(getGrade(studentScore) !== "F") {
        return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.";
    } else {
        return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.";
    }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));