export const isString = (value: unknown): value is string => {
    return typeof value === 'string';
};

export const isNumber = (value: unknown): value is number => {
    return typeof value === 'number' && !isNaN(value);
};

export const isBoolean = (value: unknown): value is boolean => {
    return typeof value === 'boolean';
};

export const isArray = (value: unknown): value is any[] => {
    return Array.isArray(value);
};

export const isObject = (value: unknown): value is Record<string, unknown> => {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
};

export const isFunction = (value: unknown): value is Function => {
    return typeof value === 'function';
};

export const isNil = (value: unknown): value is null | undefined => {
    return value === null || value === undefined;
};

export const isEmpty = (value: unknown): boolean => {
    if (isNil(value)) return true;
    if (isString(value)) return value.trim().length === 0;
    if (isArray(value)) return value.length === 0;
    if (isObject(value)) return Object.keys(value).length === 0;
    return false;
};
