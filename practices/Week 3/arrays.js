let new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])

const values = ["one", "two", "three"];
const valuesHtml = values.map(function (values) {
    return `<li>${values}</li>`
});
document.getElementById("myList").innerHTML = valuesHtml.join();

const grades = ["A", "B", "A"];
function convertingGrades2Points(grades) {
    let points = 0;
    if (grades == "A") {
        points == 4;
    }
    else if (grades == "B") {
        points == 3;
    }
    return points;
}
const gpaPoints = grades.map(convertingGrades2Points);