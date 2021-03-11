import { add } from '../lib';

describe('util test', () => {
  it('add function', function () {
    expect(add(1, 2)).toBe(3);
  });
});