const Calculator = require('../lib/calculator.js');
const {
    expect
} = require('chai');

describe('Calculator function SUM', function () {
    let calculator;
    beforeEach(function () {
        calculator = new Calculator();
    });
    afterEach(function () {
        calculator = null;
    });
    it('Should return sum of numbers', function () {
        expect(calculator.sum(2, -4, 1)).to.be.equal(-1);
    });
    it('Should return error "Cannot be empty"', function () {
        expect(calculator.sum).to.throw(Error);
    });
    it('Should return error "Only one operator"', function () {
        expect(() => calculator.sum(8)).to.throw('Operation can not be executed with only one argument')
    });
    it('Should return "Not a number"', function () {
        expect(() => calculator.sum(1, 'b', 3, 4)).to.throw(`One of entered values "b" is not a number`)
    })
});

describe('Calculator function MULTIPLY', function () {
    let calculator;
    beforeEach(function () {
        calculator = new Calculator();
    });
    afterEach(function () {
        calculator = null;
    });
    it('Should return multiplication of numbers', function () {
        expect(calculator.multiply(2, 4, -100)).to.be.equal(-800);
    });

    it('Should return error "Cannot be empty"', function () {
        expect(() => calculator.multiply()).to.throw(Error);
    });
    it('Should return error "Only one operator"', function () {
        expect(() => calculator.multiply(98)).to.throw('Operation can not be executed with only one argument')
    });
    it('Should return "Not a number"', function () {
        expect(() => calculator.multiply(1, 8, 3, 'world')).to.throw(`One of entered values "world" is not a number`)
    })
});