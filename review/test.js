class Test {
    constructor() {
        this.HomePage = element(by.css('.'));
    }

    open(link) {
        return browser.get(link)
    }
}


describe ('firt test', function () =>

const test = new Test();

it ('test', function () => {
    const link = test.HomePage.open('https:...');
    expect(link).to.be.equal('https:...')
})
)