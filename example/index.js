const lwipPixels = require("../lib")
    , lwip = require("lwip")
    ;


lwip.open(`${__dirname}/octocat.png`, (err, img) => {
    console.log(lwipPixels(img));
   
});
