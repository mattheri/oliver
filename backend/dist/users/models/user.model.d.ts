import { Provider } from './provider.model';
export declare class User {
    id: string;
    name?: string;
    email: string;
    provider: Provider;
    password?: string;
    refreshToken?: string;
    accessToken: string;
    created?: Date;
    updated?: Date;
}
