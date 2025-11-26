# @bytetologic/lex

TypeScript-first schema validation with seamless static type inference. The data validation library for JS.

## Installation

```bash
npm install @bytetologic/lex
```

## Usage

```typescript
import { isString, isNumber, isEmpty } from '@bytetologic/lex';

isString('hello'); // true
isNumber(123); // true
isEmpty(null); // true
isEmpty([]); // true
```

## API

- `isString(value: unknown): boolean`
- `isNumber(value: unknown): boolean`
- `isBoolean(value: unknown): boolean`
- `isArray(value: unknown): boolean`
- `isObject(value: unknown): boolean`
- `isFunction(value: unknown): boolean`
- `isNil(value: unknown): boolean`
- `isEmpty(value: unknown): boolean`

## License

ISC
