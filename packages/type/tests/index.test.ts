import {
    isString,
    isNumber,
    isBoolean,
    isArray,
    isObject,
    isFunction,
    isNil,
    isEmpty,
} from '../src/index';

describe('Type Checks', () => {
    test('isString', () => {
        expect(isString('hello')).toBe(true);
        expect(isString(123)).toBe(false);
    });

    test('isNumber', () => {
        expect(isNumber(123)).toBe(true);
        expect(isNumber('123')).toBe(false);
        expect(isNumber(NaN)).toBe(false);
    });

    test('isBoolean', () => {
        expect(isBoolean(true)).toBe(true);
        expect(isBoolean(false)).toBe(true);
        expect(isBoolean(0)).toBe(false);
    });

    test('isArray', () => {
        expect(isArray([])).toBe(true);
        expect(isArray({})).toBe(false);
    });

    test('isObject', () => {
        expect(isObject({})).toBe(true);
        expect(isObject([])).toBe(false);
        expect(isObject(null)).toBe(false);
    });

    test('isFunction', () => {
        expect(isFunction(() => { })).toBe(true);
        expect(isFunction({})).toBe(false);
    });

    test('isNil', () => {
        expect(isNil(null)).toBe(true);
        expect(isNil(undefined)).toBe(true);
        expect(isNil(0)).toBe(false);
        expect(isNil('')).toBe(false);
    });

    test('isEmpty', () => {
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(undefined)).toBe(true);
        expect(isEmpty('')).toBe(true);
        expect(isEmpty('  ')).toBe(true);
        expect(isEmpty([])).toBe(true);
        expect(isEmpty({})).toBe(true);
        expect(isEmpty('hello')).toBe(false);
        expect(isEmpty([1])).toBe(false);
        expect(isEmpty({ a: 1 })).toBe(false);
    });
});
