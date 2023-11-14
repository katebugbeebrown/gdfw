// GLOBAL VARIABLES
let userInput = '';
let result = '';
// Font
let font;
// Color variables
let bgcolor = 255;
let txtcolor = 0;
let input;
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create an input field
  input = createInput();
  input.addClass('input-1');
  // input.position(windowWidth / 4, windowHeight / 15); // Adjusted position to stack
  // input.size(windowWidth / 2, windowHeight / 20);
  // Create a submit button
  button = createButton('Type a noun or noun phrase');
  button.addClass('button-1');
  // button.position(windowWidth / 4, windowHeight / 7); // Adjusted position to stack
  // button.size(windowWidth / 2, windowHeight / 20);
  button.mousePressed(processInput);
  // Load font
  font = loadFont('fonts/grotBook.otf');
}
function draw() {
  determineScreenSize();
  background(bgcolor);
  textSize(13); // Adjusted default text size for better readability
  textAlign(LEFT, CENTER);
  textFont(font);
  fill(txtcolor);
  // text('WHICH ONE? Type a noun or noun phrase:', 50, windowHeight/15);
  // Display the result
  push();
  textSize(windowWidth / 4); // Adjusted result text size
  textAlign(CENTER, CENTER);
  fill(txtcolor);
  text(result, windowWidth / 2, windowHeight / 2);
  pop();
}
function processInput() {
  userInput = select('input').value();
  if (userInput.length >= 8) {
    result = 'THIS';
    bgcolor = 0;
    txtcolor = 255;
  } else {
    result = 'THAT';
    bgcolor = 255;
    txtcolor = 0;
  }
}
function determineScreenSize() {
  if (windowWidth < 768) { // Adjust these values for appropriate breakpoints
    // If the window width is less than 768 (common for mobile devices)
    textSize(windowWidth / 40); // Smaller text size for mobile
  } else {
    // If the window width is greater (common for desktop)
    textSize(windowWidth / 30); // Default text size for desktop
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // input.position(windowWidth / 4, windowHeight / 15); // Adjusted position to stack
  // input.size(windowWidth / 2, windowHeight / 20);
  // button.position(windowWidth / 4, windowHeight / 7); // Adjusted position to stack
  // button.size(windowWidth / 2, windowHeight / 20);
}