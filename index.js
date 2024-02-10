// index.js

function adjustContrast(img, contrast = 0) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Draw the original image
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Adjust contrast
    const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
    for (let i = 0; i < data.length; i += 4) {
        data[i] = factor * (data[i] - 128) + 128;
        data[i + 1] = factor * (data[i + 1] - 128) + 128;
        data[i + 2] = factor * (data[i + 2] - 128) + 128;
    }

    // Put the modified image data back onto the canvas
    ctx.putImageData(imageData, 0, 0);

    // Return the modified image
    return canvas.toDataURL();
}

function cropImage(img, x, y, width, height) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size to crop size
    canvas.width = width;
    canvas.height = height;

    // Draw cropped image onto canvas
    ctx.drawImage(img, x, y, width, height, 0, 0, width, height);

    // Return the cropped image as data URL
    return canvas.toDataURL();
}

module.exports = { adjustContrast, cropImage };
