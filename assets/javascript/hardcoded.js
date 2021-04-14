/**
 * Drawing a rectangle, straight-line and a quadratic curve
 * Hard coded values running as the page loads.
 */

// const canvas = document.getElementById("canvas-real");
// const ctx = canvas.getContext("2d");
// ctx.fillStyle = "#00ff00";
// ctx.fillRect(50, 50, 200, 200);
// // each beginPath and stroke starts and ends the line.
// ctx.beginPath();
// ctx.strokeStyle = "#0000ff";
// ctx.lineWidth = 5;
// ctx.moveTo(300, 50);
// ctx.lineTo(800, 350);
// ctx.stroke();
// // comment
// ctx.beginPath();
// ctx.strokeStyle = "#ccc";
// ctx.moveTo(400, 50);
// ctx.quadraticCurveTo(600, 200, 400, 300);
// ctx.stroke();
/**
 * Drawing Rectangle, straight-line and quadratic curve functions.
 */
// const canvas = document.getElementById("canvas-real");
// const ctx = canvas.getContext("2d");

// function DrawingRect(startingPos, height, width, colour) {
//   ctx.fillStyle = colour;
//   ctx.fillRect(startingPos[0], startingPos[1], height, width);
// }
// function DrawingLine(startingPos, endingPos, width, colour) {
//   ctx.beginPath();
//   ctx.strokeStyle = colour;
//   ctx.lineWidth = width;
//   ctx.moveTo(startingPos[0], startingPos[1]);
//   ctx.lineTo(endingPos[0], endingPos[1]);
//   ctx.stroke();
// }
// function DrawingQuadratic(startingPos, controlPoint, endingPos, width, colour) {
//   ctx.beginPath();
//   ctx.strokeStyle = colour;
//   ctx.lineWidth = width;
//   ctx.moveTo(startingPos[0], startingPos[1]);
//   ctx.quadraticCurveTo(
//     controlPoint[0],
//     controlPoint[1],
//     endingPos[0],
//     endingPos[1]
//   );
//   ctx.stroke();
// }
// DrawingRect([100, 100], 300, 350, "#000");
// DrawingLine([400, 400], [700, 700], 10, "#0000ff");
// DrawingQuadratic([250, 250], [600, 50], [900, 250], 10, "#ccc");
