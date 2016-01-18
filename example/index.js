const lwipPixels = require("../lib")
    , lwip = require("lwip")
    ;

lwip.open(`${__dirname}/octocat.png`, (err, img) => {
    console.log(lwipPixels(img));
    // [ [ { r: 0, g: 0, b: 0, a: 0 },
    //     ...
    //     { r: 0, g: 0, b: 0, a: 0 },
    //     { r: 0, g: 0, b: 0, a: 0 },
    //     { r: 0, g: 0, b: 0, a: 0 } ],
    //   ...
    //   [ { r: 0, g: 0, b: 0, a: 0 },
    //     { r: 0, g: 0, b: 0, a: 0 },
    //     ...
    //     { r: 255, g: 255, b: 255, a: 0 },
    //     ...
    //     { r: 0, g: 0, b: 0, a: 0 } ] ]
});
