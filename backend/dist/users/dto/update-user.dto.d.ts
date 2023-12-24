import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<Omit<CreateUserDto, "provider" | "password" | "refreshToken" | "created" | "updated" | "token">>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
