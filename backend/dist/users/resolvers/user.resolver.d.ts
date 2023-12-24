import { User } from '../models/user.model';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserService } from '../services/user.service';
import { UpdatePasswordDto } from '../dto/update-password.dto';
import { FindUserByEmailDto } from '../dto/find-user-by-email.dto';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    updateUser(input: UpdateUserDto, user: User): Promise<{
        id: string;
        name: string;
        email: string;
        provider: string;
        password: string;
        refreshToken: string;
        created: Date;
        updated: Date;
    }>;
    updatePassword(input: UpdatePasswordDto, user: User): Promise<{
        id: string;
        name: string;
        email: string;
        provider: string;
        password: string;
        refreshToken: string;
        created: Date;
        updated: Date;
    }>;
    user(input: FindUserByEmailDto): Promise<{
        id: string;
        name: string;
        email: string;
        provider: string;
        password: string;
        refreshToken: string;
        created: Date;
        updated: Date;
    }>;
}
