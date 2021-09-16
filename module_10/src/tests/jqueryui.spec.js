const {browser, element, by, Key} = require('protractor');

describe('testing actions', () => {
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
    });

    it('check selection 3 items with mouse', async () => {
        await browser.get('https://jqueryui.com/selectable/');
        await browser.switchTo().frame(element(by.xpath("//iframe[@class='demo-frame']")).getWebElement());

        const items = element.all(by.css('ol#selectable li'));

        await browser.actions()
            .mouseDown(items.get(0))
            .mouseMove(items.get(1))
            .mouseMove(items.get(2))
            .mouseUp()
            .perform();
    })

    it('check selection 2 items with CONTRL', async () => {
        await browser.get('https://jqueryui.com/selectable/');
        await browser.switchTo().frame(element(by.xpath("//iframe[@class='demo-frame']")).getWebElement());

        const items = element.all(by.css('ol#selectable li'));

        await browser.actions()
            .keyDown(Key.CONTROL)
            .click(items.get(0))
            .click(items.get(2))
            .keyUp(Key.CONTROL)
            .perform();
    })

    it('check drag and drop action (to another element)', async () => {
        await browser.get('https://jqueryui.com/droppable/');
        await browser.switchTo().frame(element(by.xpath("//iframe[@class='demo-frame']")).getWebElement());

        const el1 = element(by.css('#draggable'));
        const el2 = element(by.css('#droppable'));

        await browser.actions().dragAndDrop(el1, el2).perform();
    })

    it('check drag and drop action (to another position)', async () => {
        await browser.get('https://jqueryui.com/droppable/');
        await browser.switchTo().frame(element(by.xpath("//iframe[@class='demo-frame']")).getWebElement());

        const el1 = element(by.css('#draggable'));
        await browser.actions().dragAndDrop(el1, {x: 10, y: 10}).perform();
    })

    afterEach(async () => {
        await browser.waitForAngularEnabled(true);
    });
})
