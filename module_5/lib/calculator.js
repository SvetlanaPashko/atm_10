class Calculator {
    sum(...numbers) {
        this.moreThanOneNumber(numbers);
        this.areNumbers(numbers);
        return numbers.reduce(((previous, current) => previous + current));
    };

    multiply(...numbers) {
        this.moreThanOneNumber(numbers);
        this.areNumbers(numbers);
        return numbers.reduce((previous, current) => previous * current)
    }

    areNumbers(numbers) {
        let result = numbers.find(i => typeof i !== 'number');
        if (result !== undefined) {
            throw new Error(`One of entered values "${result}" is not a number`)
        }
    };

    moreThanOneNumber(numbers) {
        if (numbers.length === 0) {
            throw new Error(`Cannot be empty`)
        };
        if (numbers.length === 1) {
            throw new Error(`Operation can not be executed with only one argument`)
        };
    }
}

module.exports = Calculator;