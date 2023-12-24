import { Provider as IProvider } from '../interfaces/user.interfaces';
export declare class CreateUserDto {
    name?: string;
    email: string;
    provider: IProvider;
    password?: string;
    refreshToken?: string;
    token?: string;
    created?: Date;
    updated?: Date;
}
