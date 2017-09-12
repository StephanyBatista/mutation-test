export class DomainException extends Error {
    
    constructor(message: string) {
        super();
        this.message = message;
    }

    static when(isValid: boolean, message: string) {
        if (isValid) {
            throw new DomainException(message);
        }
    }
}