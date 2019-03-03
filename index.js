let photoReader = require('./photoReader');

photoReader.read('sampleImage.png', function name(error, pixels, info) {
    if (error) {
        console.log('error reading file');
        return;
    }
    let grayScale = photoReader.getGrayScale(pixels);
})