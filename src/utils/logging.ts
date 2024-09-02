export class Logger {
    static debugMessages: string[] = [];
    static infoMessages: string[] = [];
    static warningMessages: string[] = [];
    static errorMessages: string[] = [];

    static debug(message: string): void {
        this.debugMessages.push(message);

        console.debug(message);
    }

    static info(message: string): void {
        this.infoMessages.push(message);

        console.info(message);
    }

    static warning(message: string): void {
        this.warningMessages.push(message);

        console.warn(message);
    }

    static error(message: string): void {
        this.errorMessages.push(message);

        console.error(message);
    }
}