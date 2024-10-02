

let matrix = [
    [1, 2, 3],
    [4, 5, 3],
    [2, 5, 3]
];

let primaryDiagonal = [];
let secondaryDiagonal = [];
for (let i = 0; i < matrix.length; i++) {
    primaryDiagonal.push(matrix[i][i]);  
    secondaryDiagonal.push(matrix[i][matrix.length - i - 1]);  
}
console.log("Diagonal elements are: " + primaryDiagonal.concat(secondaryDiagonal).join(" "));



let matrix = [
    [1, 2, 3],
    [4, 5, 3],
    [2, 5, 3]
];

let outerLayer = [];
for (let i = 0; i < matrix[0].length; i++) {
    outerLayer.push(matrix[0][i]);
}
for (let i = 1; i < matrix.length - 1; i++) {
    outerLayer.push(matrix[i][matrix[i].length - 1]);
}
for (let i = matrix[matrix.length - 1].length - 1; i >= 0; i--) {
    outerLayer.push(matrix[matrix.length - 1][i]);
}
for (let i = matrix.length - 2; i > 0; i--) {
    outerLayer.push(matrix[i][0]);
}
console.log("Outer layer elements: " + outerLayer.join(" "));

