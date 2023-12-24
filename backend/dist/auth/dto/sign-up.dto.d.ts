import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from './login.dto';
declare const SignUpDto_base: import("@nestjs/common").Type<LoginDto & Partial<Omit<CreateUserDto, "email">>>;
export declare class SignUpDto extends SignUpDto_base {
    passwordCheck: string;
}
export {};
