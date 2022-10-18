"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.time = void 0;
function time() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const result = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`Method ${propertyKey} took ${t2 - t1} ms`);
            return result;
        };
        return descriptor;
    };
}
exports.time = time;
