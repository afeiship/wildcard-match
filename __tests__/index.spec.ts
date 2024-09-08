import wildcardMatch from '../src';

describe('api.basic', () => {
  test.only('01/basic', () => {
    expect(wildcardMatch('axxxc', 'a*c',)).toBe(true);
    expect(wildcardMatch('foo', '*')).toBe(true);
    expect(wildcardMatch('foo', 'fo')).toBe(false);
    expect(wildcardMatch('foo', 'foo')).toBe(true);
    expect(wildcardMatch('foo', 'f*')).toBe(true);
    expect(wildcardMatch('foo', 'bar')).toBe(false);
    expect(wildcardMatch('foo', 'b*')).toBe(false);
    expect(wildcardMatch('foo', '')).toBe(false);
  });

  test('02/start with star', () => {
    expect(wildcardMatch('foo', 'foo')).toBe(true);
    expect(wildcardMatch('foo', '*foo')).toBe(true);
    expect(wildcardMatch('foo', '*oo')).toBe(true);
    expect(wildcardMatch('foo', '*o')).toBe(true);
  });

  test('03/end with star', () => {
    expect(wildcardMatch('foo', 'f*')).toBe(true);
    expect(wildcardMatch('foo', 'bar')).toBe(false);
    expect(wildcardMatch('foo', 'b*')).toBe(false);
  })

  test('04/middle with star', () => {
    expect(wildcardMatch('foo', 'f*r')).toBe(false);
    expect(wildcardMatch('foo', 'f*o')).toBe(true);
  });

  test('05/multiple stars', () => {
    expect(wildcardMatch('foo', 'f*o*')).toBe(true);
    expect(wildcardMatch('foo', 'f*o*b*')).toBe(false);
  });

  test('06/special characters', () => {
    expect(wildcardMatch('foo:bar', 'foo:*')).toBe(true);
    expect(wildcardMatch('foo@bar', 'foo@*')).toBe(true);
    expect(wildcardMatch('foo!bar', 'foo!*')).toBe(true);
    expect(wildcardMatch('foo(bar', 'foo(*')).toBe(true);

    expect(wildcardMatch('filename.txt', '*name')).toBe(false);
    expect(wildcardMatch('filename.txt', 'name*')).toBe(false);
    expect(wildcardMatch('filename.txt', '*name*')).toBe(true);
    expect(wildcardMatch('abcfilenameabc', '*xx*name*xx*')).toBe(false);
    expect(wildcardMatch('xxabcnamexx', '*xx*name*xx*')).toBe(true);
  });
});
