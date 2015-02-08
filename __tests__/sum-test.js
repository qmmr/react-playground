jest.dontMock('../src/scripts/sum')

import sum from '../src/scripts/sum'

describe('Give a sum function', function () {
	it('should add 1 + 2 to equal 3', function () {
		expect(sum(1, 2)).toBe(3);
	});
});
