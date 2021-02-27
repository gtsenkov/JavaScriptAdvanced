const { sum } = require('./myModule');
const { expect, assert } = require('chai');

describe('Sum function', () => {
    it ('works', () => {
        expect(sum(1, 2)).to.equal(3);
        //throw Error();
    });

    it('fails with ivalid values', () => {
        // expect(sum('a', 'a')).to.be.NaN;
        assert.isNaN(sum('a', 'a'));
    });
});