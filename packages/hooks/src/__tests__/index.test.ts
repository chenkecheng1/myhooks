import * as hooks from '..';

describe('ckc-hooks', () => {
  test('exports modules should be defined', () => {
    Object.keys(hooks).forEach((module) => {
      expect(hooks[module]).toBeDefined();
    });
  });
});
