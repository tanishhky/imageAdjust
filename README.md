# imageadjust

A simple npm package for adjusting image contrast.

## Installation

```bash
npm install imageadjust
```

## Usage
```
const adjustContrast = require('imageadjust');

// Example usage with an image element and a contrast value
const imgElement = document.getElementById('yourImageElementId');
const adjustedImage = adjustContrast(imgElement, 50); // Adjust contrast by 50

// `adjustedImage` now contains the modified image as a data URL
```