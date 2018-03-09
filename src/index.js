class SmartCalculator {
    constructor(initialValue) {
        this.value = initialValue;
    }

    add(number) {
        this.value = this.value + '+' + number;
        return this;
    }

    subtract(number) {
        this.value = this.value + '-' + number;
        return this;
    }

    multiply(number) {
        this.value = this.value + '*' + number;
        return this;
    }

    devide(number) {
        this.value = this.value + '/' + number;
        return this;
    }

    pow(number) {
        this.value = this.value + '**' + number;
        return this;
    }
    // override the default method (which is used when comparing objects)
    // by its own method (the name should remain the default)
    toString() {
       var result = eval(this.value);
        return result;
    }
}

module.exports = SmartCalculator;
