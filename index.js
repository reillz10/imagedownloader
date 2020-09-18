var fs = require("fs");
var https = require("https");
var mkdirp = require("mkdirp");

mkdirp.sync('./sites/default/files/card/images');

mkdirp.sync('./sites/default/files/course/image/promoted');

var text = fs.readFileSync('programimages.txt').toString('utf-8');

var textarr = text.split("\n");


textarr.forEach(t => {
    try {
        console.log('.');
        saveImageToDisk('https://www.edx.org' + t, '.' + t)
    } catch {
        console.log("failed downloading " + t);
    }
});

function saveImageToDisk(url, localPath) {
    var file = fs.createWriteStream(localPath);
    var request = https.get(url, function(res) {
        res.pipe(file)
    });
}