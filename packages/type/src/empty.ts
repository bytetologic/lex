import { isNil, isString } from "./basic";
import { isArray, isObject } from "./object";


export const isEmptyStr = (value: unknown): boolean => {
    return isString(value) && value.trim().length === 0;
};

export const isEmptyArr = (value: unknown): boolean => {
    return isArray(value) && value.length === 0;
};


export const isEmptyObj = (value: unknown): boolean => {
    return isObject(value) && Object.keys(value).length === 0;
};

export const isEmpty = (value: unknown): boolean => {
    if (isNil(value)) return true;
    if (isString(value)) return value.trim().length === 0;
    if (isArray(value)) return value.length === 0;
    if (isObject(value)) return Object.keys(value).length === 0;
    return false;
};

export const isNotEmpty = (value: unknown): boolean => {
    return !isEmpty(value);
};