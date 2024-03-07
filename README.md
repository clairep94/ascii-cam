# ABOUT
![ISMovie-984126](https://github.com/clairep94/ascii-cam/assets/128436909/ac9f027e-c9af-4049-8f13-c7edbd26bbd9)

This is a webcam to ASCII converter that runs on p5js. <br>
This is made through the following process:
- Set up a webcam feed
- Convert the feed into a lower resolution (fewer pixels to create the image)
- Convert the colour feed into B/W
- Map the value of each B/W pixel against a ASCII character array that is in order of density
  - Larger B/W are closer to black --> These values will get mapped to a dense character such as `@`
  - Lower B/W values are closer to white --> These values will get mapped to a less dense character such as ` `
  - Several ASCII arrays are offered
  - Users may reverse the map if they want an inverted image conversion.

## WHAT I LEARNED

- [x] How to set up a webcam feed
- [x] How images are stored as a matrix of pixels (array of R, G, B integer values)
- [x] How to convert colour pixels into B/W pixels by averaging the R, G, B values of each pixel
- [x] How to map B/W pixels to ASCII characters of different densities

## FUTURE LEARNING & IMPLEMENTATION
- [ ] How to compile p5js & run this program on another website
- [ ] Raspberry pi project --> implementing the same logic in python to run on a pi camera
- [ ] Storing the converted feed into different file formats (static image formats, text files)
