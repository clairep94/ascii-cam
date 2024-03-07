// Image to ASCII

// ----- Density options: ----------------
// const density = "Ñ@#W$9876543210?!abc;:+=-,._                       ";
const density = "Ñ@W97531?ac:=,_         ";
// const density = '@#O%+=|i-:.       '
// const density = '        .:░▒▓█';

let video; //define video
let asciiDiv; //define asciiDiv element

// setup camera feed
function setup() {
  noCanvas();
  // capture video feed with dimensions 160 x 100 px
  video = createCapture(VIDEO);
  video.size(160, 100);
  // create asciiDiv element
  asciiDiv = createDiv();
}

function draw() {
  // load pixels from video feed
  video.loadPixels();
  // create empty asciiImage string
  let asciiImage = "";
  // for row in range(row, video.height)
  for (let j = 0; j < video.height; j++) {
    // for col in range(col, video.width)
    for (let i = 0; i < video.width; i++) {
      // get pixel index to access individual pixel in the video feed
      const pixelIndex = (i + j * video.width) * 4;
      // get RGB values for each pixel
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      // turn colour-feed into b/w
      // find greyscale value by averaging RGB values
      const bw = (r + g + b) / 3;
      // length of the chosen density string
      const lenDensity = density.length;
      // Map the greyscale value from 0 to 255 to a character index between 0 and len
      const charIndex = floor(map(bw, 0, 255, 0, lenDensity));
      // Find the character c calculated at the character index on the density string
      const c = density.charAt(charIndex);
      // if c is whitespace, add html readable whitespace string to asciiImage
      if (c == " ") asciiImage += "&nbsp;";
      // else add c to asciiImage
      else asciiImage += c;
    }
    // add linebreak to end of row
    asciiImage += "<br/>";
  }
  // update content of asiiDiv with asciiImage string
  asciiDiv.html(asciiImage);
}
