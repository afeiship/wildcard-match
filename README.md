# wildcard-match
> A function for matching strings using * wildcard patterns.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/wildcard-match
```

## usage
```js
import wildcardMatch from '@jswork/wildcard-match';

// 测试案例
console.log(wildcardMatch("filename.txt", "*name")); // false
console.log(wildcardMatch("filename.txt", "name*")); // false
console.log(wildcardMatch("filename.txt", "*name*")); // true
console.log(wildcardMatch("abcfilenameabc", "*xx*name*xx*")); // false
console.log(wildcardMatch("xxabcnamexx", "*xx*name*xx*")); // true
```

## license
Code released under [the MIT license](https://github.com/afeiship/wildcard-match/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/wildcard-match
[version-url]: https://npmjs.org/package/@jswork/wildcard-match

[license-image]: https://img.shields.io/npm/l/@jswork/wildcard-match
[license-url]: https://github.com/afeiship/wildcard-match/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/wildcard-match
[size-url]: https://github.com/afeiship/wildcard-match/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/wildcard-match
[download-url]: https://www.npmjs.com/package/@jswork/wildcard-match
