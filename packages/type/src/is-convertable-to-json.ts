
export interface IsConvertableToJsonResult {
    safe: boolean;
    message?: string;
}

export function isConvertableToJson(obj: any): IsConvertableToJsonResult {
    const seen = new WeakMap<object, string>(); // store object → path

    function check(value: any, path: string): IsConvertableToJsonResult {
        const type = typeof value;

        // Unsupported JSON types
        if (type === "function" || type === "symbol" || type === "bigint") {
            return {
                safe: false,
                message: `Unsupported type '${type}' at path: ${path}`
            };
        }

        // Primitive values are safe
        if (value === null || type !== "object") {
            return { safe: true };
        }

        // Circular reference detection
        if (seen.has(value)) {
            return {
                safe: false,
                message: `Circular reference found at path: ${seen.get(value)} -> ${path}`
            };
        }

        // Mark visited object with its path
        seen.set(value, path);

        // Arrays
        if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
                const result = check(value[i], `${path}[${i}]`);
                if (!result.safe) return result;
            }
            return { safe: true };
        }

        // Objects
        for (const key in value) {
            const result = check(value[key], `${path}.${key}`);
            if (!result.safe) return result;
        }

        return { safe: true };
    }

    return check(obj, "root");
}
