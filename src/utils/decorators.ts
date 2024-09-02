/* 
eslint-disable 
    @typescript-eslint/no-unsafe-assignment, 
    @typescript-eslint/no-unsafe-return, 
    @typescript-eslint/no-unsafe-call, 
    @typescript-eslint/no-unsafe-member-access 
*/

import { Converter } from "./converters";
import { Logger } from "./logging";

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

export function captureReturnValueAsync(unused1: any, unused2: any, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]): Promise<any> {
        const result = await originalMethod.apply(this, args);

        console.log(Logger.debugMessages);
        console.log(Logger.infoMessages);
        console.log(Logger.warningMessages);
        console.log(Logger.errorMessages);

        // Send back the result
        // message_callback_body(...)

        return result;
    };

    return descriptor;
}