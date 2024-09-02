import { StartData } from "./models/startdata";

export abstract class Converter<T> {
    abstract defaultValue: T;
    abstract convert(value: any): T;
}

export class StartDataConverter extends Converter<StartData> {
    defaultValue: StartData = {
        value: "a"
    };

    convert(value: any): StartData {
        if (!value) {
            return this.defaultValue;
        }

        if (typeof value === 'string') {
            value = JSON.parse(value) as StartData;
        }

        if (typeof value === 'object') {
            return { ...this.defaultValue, ...value } as StartData;
        }

        throw new ConverterError("Failed to correctly handle the start data");
    }
}

export class CollectOrdersConverter extends Converter<boolean> {
    defaultValue: boolean = true;

    convert(value: any): boolean {
        if (!value) {
            return this.defaultValue;
        }

        if (typeof value === 'string') {
            return value !== 'false'
        }

        if (typeof value === 'boolean') {
            return value;
        }

        throw new ConverterError("Failed to correctly handle the collect orders flag");
    }
}

export class ConverterError extends Error {
    constructor(message: string) {
        super(message);
    }
}