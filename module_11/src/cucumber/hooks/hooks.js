const {After, Status} = require('cucumber');
const {protractor} = require('protractor');
const fs = require('fs-extra');
const ARTIFACTS_DIR = './artifacts';

After(async function ({result}) {
    if (result.status === Status.FAILED) {
        const screenShot = await protractor.browser.takeScreenshot();
        const decodedImage = new Buffer.from(screenShot, 'base64');
        fs.writeFileSync(`${ARTIFACTS_DIR}/screenshots/${new Date().valueOf()}_image.png`, decodedImage);
        return this.attach(decodedImage, 'image/png');
    }
})