const lwipPixels = require("../lib")
    , lwip = require("lwip")
    ;

lwip.open(`${__dirname}/octocat.png`, (err, img) => {
    console.log(lwipPixels(img));
    // [ [ PixelClass { r: 0, g: 0, b: 0, a: 0 },
    //     PixelClass { r: 0, g: 0, b: 0, a: 0 },
    //     PixelClass { r: 0, g: 0, b: 0, a: 0 },
    //     ...
    //     PixelClass { r: 0, g: 0, b: 0, a: 0 } ],
    //   [ PixelClass { r: 0, g: 0, b: 0, a: 0 },
    //     ...
    //     PixelClass { r: 0, g: 0, b: 0, a: 0.14 },
    //     ...
    //     PixelClass { r: 0, g: 0, b: 0, a: 0 } ],
    //   ... ]
});
