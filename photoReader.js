let getPixels = require('get-pixels');

//New grayscale image = ( (0.3 * R) + (0.59 * G) + (0.11 * B) ).
function read(path, callback) {
    getPixels(path, function (error, pixels) {
        if (error) {
            callback(error);
            return;
        }
        let x = 0, y = 0, allPixels = [[]];
        for (var i = 0; i < pixels.data.length; i += pixels.shape[2]) {
            let pix = [];
            for (var s = 0; s < pixels.shape[2]; s++) {
                pix.push(pixels.data[i + s]);
            }
            y++;
            allPixels[x].push(pix);
            if (y == pixels.shape[0]) {
                x++;
                y = 0;
                allPixels.push([]);
            }
        }
        callback(null, allPixels, {
            width: pixels.shape[0],
            height: pixels.shape[1],
            channels: pixels.shape[2],
            stride: pixels.stride,
            offset: pixels.offset
        });
    })
}

function getGrayScale(pixels) {
    let grayscale = [];
    for (var y = 0; y < pixels.length; y++) {
        grayscale.push([]);
        for (var x = 0; x < pixels[y].length; x++) {
            let gray = (0.3 * pixels[y][x][0]) + (0.59 * pixels[y][x][1]) + (0.11 * pixels[y][x][2]);
            gray = parseInt(gray);
            grayscale[y].push(gray);
        }
    }
    return grayscale;
}
module.exports.getGrayScale = getGrayScale;
module.exports.read = read;