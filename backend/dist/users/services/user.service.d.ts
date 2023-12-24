import { DatabaseService } from 'src/db/services/db.service';
import { User } from '@prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';
import { FindUserByEmailDto } from '../dto/find-user-by-email.dto';
import { HashService } from './hash.service';
export declare class UserService {
    private readonly db;
    private readonly hasher;
    constructor(db: DatabaseService, hasher: HashService);
    getUser(id: string): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
    createUser({ email, name, provider, password, }: CreateUserDto): Promise<Omit<User, 'password' | 'refreshToken'>>;
    updatePassword(id: string, currentPassword: string, newPassword: string): Promise<{
        id: string;
        name: string;
        email: string;
        provider: string;
        password: string;
        refreshToken: string;
        created: Date;
        updated: Date;
    }>;
    updateUser(id: string, data: Partial<User>): Promise<{
        id: string;
        name: string;
        email: string;
        provider: string;
        password: string;
        refreshToken: string;
        created: Date;
        updated: Date;
    }>;
    findUserByEmail({ email }: FindUserByEmailDto): Promise<{
        id: string;
        name: string;
        email: string;
        provider: string;
        password: string;
        refreshToken: string;
        created: Date;
        updated: Date;
    }>;
    deleteUserByEmail({ email }: FindUserByEmailDto): Promise<{
        id: string;
        name: string;
        email: string;
        provider: string;
        password: string;
        refreshToken: string;
        created: Date;
        updated: Date;
    }>;
    deleteAllUsers(): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
