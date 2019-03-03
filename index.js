let photoReader = require('./photoReader');

photoReader.read('sampleImage.png', function name(error, pixels, info) {
    if (error) {
        console.log('error reading file');
        return;
    }
    console.log(pixels[13][19]);
    let grayScale = photoReader.getGrayScale(pixels);
})