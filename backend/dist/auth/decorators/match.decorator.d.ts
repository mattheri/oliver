import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare const Match: <T>(property: keyof T, options?: ValidationOptions) => (object: any, propertyName: string) => void;
export declare class MatchConstraint implements ValidatorConstraintInterface {
    validate(value: any, args?: ValidationArguments): boolean;
    defaultMessage(args?: ValidationArguments): string;
}
