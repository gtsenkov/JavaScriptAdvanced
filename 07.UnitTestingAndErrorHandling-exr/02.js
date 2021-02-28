const describe = require('mocha').describe;
const assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}

describe('check isOddOrEven', ()=>{
    it('Type is string', ()=>{
        assert.isUndefined(isOddOrEven(1), 'Message a==a');
    })
    
    it('Is even', ()=>{
        assert.equal(isOddOrEven('aa'), 'even', 'Message a==a');
    })
    
    it('Is odd', ()=>{
        assert.equal(isOddOrEven('a'), 'odd', 'Message a==a');
    })
})

//HOW TO CONFIGURE NEW PROJECT(FOLDER)
//npm init -> y
//npm install chai
//npm install mocha

//create launch.json
//${file} - to start run mocha tests at current file
// tdd => bdd
