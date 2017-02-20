var expect = chai.expect;

var cardNumber = function(prefix, length) {
    return prefix + ('0').repeat(length - prefix.toString().length);
}

// The Diner's Club network always starts with a 38 or 39 and 14 digits long
describe('Diner\'s Club', function() {

    ['38', '39'].forEach(function(prefix) {
        it('has a prefix of ' + prefix + ' and a length of 14', function() {
            expect(detectNetwork(cardNumber(prefix, 14))).to.equal('Diner\'s Club');
        });
    });

});

// The American Express network always has a prefix of 34 or 37 and 15 digits long
describe('American Express', function() {

    ['34', '37'].forEach(function(prefix) {
        it('has a prefix of ' + prefix + ' and a length of 15', function() {
            expect(detectNetwork(cardNumber(prefix, 15))).to.equal('American Express');
        });
    });

});

// Visa always has a length of 13, 16, or 19 and a prefix of 4
describe('Visa', function() {

    [13, 16, 19].forEach(function(visaLength) {
        it('has a prefix of 4 and a length of ' + visaLength, function() {
            expect(detectNetwork(cardNumber(4, visaLength))).to.equal('Visa');
        });
    });

});

// MasterCard always has a prefix of 51 up to 55 and a length of 16
describe('MasterCard', function() {

    for (var prefix = 51; prefix <= 55; prefix++) {

        (function(prefix) {

            it('has a prefix of ' + prefix + ' and a length of 16', function() {
                expect(detectNetwork(cardNumber(prefix, 16))).to.equal('MasterCard');
            });

        })(prefix)

    }

});

// Discover always has a prefix of 6011, 644-649 or 65 and lengths of 16 or 19 
describe('Discover', function() {

    ['644', '645', '646', '647', '648', '649', '6011', '65'].forEach(function(prefix) {

        it('has a prefix of ' + prefix + ' and a length of 16', function() {
            expect(detectNetwork(cardNumber(prefix, 16))).to.equal('Discover');
        });

        it('has a prefix of ' + prefix + ' and a length of 19', function() {
            expect(detectNetwork(cardNumber(prefix, 19))).to.equal('Discover');
        });

    });

});

// Maestro always has a prefix of 5018, 5020, 5038 or 6304 and lengths of 12-19
describe('Maestro', function() {

    ['5018', '5020', '5038', '6304'].forEach(function(prefix) {

        for (var length = 12; length >= 12 && length <= 19; length++) {
            (function(prefix, length) {
                it(('has a prefix of ' + prefix + ' and a length of ' + length), function() {
                    expect(detectNetwork(cardNumber(prefix, length))).to.equal('Maestro');
                });
            })(prefix, length)
        }

    });

});

// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19
describe('China UnionPay', function() {

    for (var prefix = 622126; prefix <= 622925; prefix++) {
        (function(prefix) {
            for (var length = 16; length >= 16 && length <= 19; length++) {
                (function(prefix, length) {
                    it(('has a prefix of ' + prefix + ' and a length of ' + length), function() {
                        expect(detectNetwork(cardNumber(prefix, length))).to.equal('China UnionPay');
                    });
                })(prefix, length)
            }
        })(prefix)
    }

    for (var prefix = 624; prefix <= 626; prefix++) {
        (function(prefix) {
            for (var length = 16; length >= 16 && length <= 19; length++) {
                (function(prefix, length) {
                    it(('has a prefix of ' + prefix + ' and a length of ' + length), function() {
                        expect(detectNetwork(cardNumber(prefix, length))).to.equal('China UnionPay');
                    });
                })(prefix, length)
            }
        })(prefix)
    }

    for (var prefix = 6282; prefix <= 6288; prefix++) {
        (function(prefix) {
            for (var length = 16; length >= 16 && length <= 19; length++) {
                (function(prefix, length) {
                    it(('has a prefix of ' + prefix + ' and a length of ' + length), function() {
                        expect(detectNetwork(cardNumber(prefix, length))).to.equal('China UnionPay');
                    });
                })(prefix, length)
            }
        })(prefix)
    }

});

// Switch has prefixes 4903, 4905, 4911, 4936, 564182, 633110, 6333 or 6759 and lengths of 16, 18 or 19
describe('Switch', function() {

    var prefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
    var lengths = [16, 18, 19];

    prefixes.forEach(function(prefix) {
        lengths.forEach(function(length) {
            it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
                expect(detectNetwork(cardNumber(prefix, length))).to.equal('Switch');
            });
        });
    });

});