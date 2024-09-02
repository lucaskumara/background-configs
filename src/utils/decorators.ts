/* 
eslint-disable 
    @typescript-eslint/no-unsafe-assignment, 
    @typescript-eslint/no-unsafe-return, 
    @typescript-eslint/no-unsafe-call, 
    @typescript-eslint/no-unsafe-member-access 
*/

import { Converter } from "./converters";

export function applyConverters(converters: Converter<any>[]) {
    return function (unused1: any, unused2: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]): any {
            args = args.map((argument: any, index: number) => {
                return converters[index].convert(argument);
            });

            return originalMethod.apply(this, args);
        };
    }
}