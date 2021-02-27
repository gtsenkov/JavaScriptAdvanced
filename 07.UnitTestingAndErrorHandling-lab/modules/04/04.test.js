const { expect } = require('chai');  
const sum = require('./04')

describe('Sum numbers', () => {
    it ('sums single number', () => {
        expect(sum([1])).to.equal(1);
    });
    
    //test overloading
    it ('sums multiple number', () => {
        expect(sum([2,3,4])).to.equal(9);
    });
    
    it ('sums multiple number', () => {
        expect(sum([1, 2])).to.equal(3);
    });
});