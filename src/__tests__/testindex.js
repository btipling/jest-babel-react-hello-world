import '../tests/init';
import jsRunner from '../public/js/jsRunner';

describe('index', () => {

  it('is a function that returns a function', () => {
    const result = jsRunner('foo');
    expect(typeof result).toEqual('function');
  });

});

