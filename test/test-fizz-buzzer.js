const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
    it(`should return 'fizz', 'buzz', or 'fizz-buzz'`, function(){
        const normalInputs = [
            {num: 15, expected: 'fizz-buzz'},
            {num: 30, expected: 'fizz-buzz'},
            {num: 45, expected: 'fizz-buzz'},
            {num: 5, expected: 'buzz'},
            {num: 10, expected: 'buzz'},
            {num: 20, expected: 'buzz'},
            {num: 3, expected: 'fizz'},
            {num: 9, expected: 'fizz'},
            {num: 21, expected: 'fizz'},
            {num: 33, expected: 'fizz'}
        ];

        normalInputs.forEach(function(input){
        const answer = fizzBuzzer(input.num);
        expect(answer).to.equal(input.expected);
        });
    });
    it('should return "num" must be a number', function(){
        const badInputs = [ '2', true, 'Hello'];

        badInputs.forEach(function(input){
            // const answer = fizzBuzzer(input);
            expect(function(){
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });

});
