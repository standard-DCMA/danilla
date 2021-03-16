import { getQueryObject } from '../lib';

describe('test url', () => {
  it('run getQueryObject - history url', function () {
    const historyUrl = 'http://www.xxx.com?name=cc&age=18';
    const historyUrlQueryEmpty = 'http://www.xxx.com';
    expect(getQueryObject(historyUrl)).toStrictEqual({
      name: 'cc',
      age: '18'
    });
    expect(getQueryObject(historyUrlQueryEmpty)).toStrictEqual({});
  });
  it('run getQueryObject - hash url ', function () {
    const hashUrl = 'http://xxx.xxxx.com/v1/xixi/index.html#/product/update?id=10086&name=商品1';
    const hashUrlQueryEmpty = 'http://xxx.xxxx.com/v1/xixi/index.html#/product/update';
    expect(getQueryObject(hashUrl)).toStrictEqual({
      id: '10086',
      name: '商品1'
    });
    expect(getQueryObject(hashUrlQueryEmpty)).toStrictEqual({});
  });
});