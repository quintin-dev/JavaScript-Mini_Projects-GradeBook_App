function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return 'A++';
    } else if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function hasPassingGrade(score) {
    return getGrade(score) !== 'F';
}
function studentMsg(totalScores, studentScore) {
    const stdAverage = getAverage(totalScores);
    const stdGrade = getGrade(studentScore);
    const passed = hasPassingGrade(studentScore);

    if (passed) {
        return (
            'Class average: ' +
            stdAverage +
            '. Your grade: ' +
            stdGrade +
            '. You passed the course.'
        );
    } else {
        return (
            'Class average: ' +
            stdAverage +
            '. Your grade: ' +
            stdGrade +
            '. You failed the course.'
        );
    }
}
console.log(studentMsg([90, 80, 12, 70, 57, 100, 67, 38, 97, 89], 70));
console.log(studentMsg([62, 88, 10, 77, 57, 90, 87, 38, 97, 89], 60));
console.log(studentMsg([72, 98, 70, 77, 87, 90, 87, 58, 97, 89], 90));
console.log(studentMsg([82, 88, 42, 77, 67, 90, 87, 38, 97, 89], 80));
console.log(studentMsg([42, 48, 52, 77, 57, 40, 87, 38, 47, 89], 40));
