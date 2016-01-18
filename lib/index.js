"use strict";

/**
 * getPixels
 * Builts a pixel matrix from the input `lwip` object.
 *
 * @name getPixels
 * @function
 * @param {lwip} image The `lwip` object.
 * @return {Array} An array of arrays of `lwip` pixels.
 */
module.exports = function getPixels (image) {

    let pixels = []
      , height = image.height()
      , width = image.width()
      , cRow = []
      ;

    for (let y = 0; y < height; ++y) {
        for (let x = 0; x < width; ++x) {
            cRow.push(image.getPixel(x, y));
        }
        pixels.push(cRow);
        cRow = [];
    }

    return pixels;
};
