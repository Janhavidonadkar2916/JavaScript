function calculateResult() {

    let CC = Number(document.getElementById("eng").value);
    let CN = Number(document.getElementById("math").value);
    let DC = Number(document.getElementById("science").value);
    let JS = Number(document.getElementById("computer").value);
    let Flexi = Number(document.getElementById("social").value);

    let total = CC+CN+DC+JS+Flexi;

    let percentage = total / 5;

    let grade = "";

    if (percentage >= 90) {
        grade = "A";
    }
    else if (percentage >= 80) {
        grade = "B";
    }
    else if (percentage >= 70) {
        grade = "C";
    }
    else if (percentage >= 60) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    document.getElementById("total").innerHTML = total;

document.getElementById("percentage").innerHTML =
percentage.toFixed(2) + "%";

document.getElementById("grade").innerHTML = grade;
}