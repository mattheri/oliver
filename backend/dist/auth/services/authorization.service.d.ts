import { AddEmailToListArgs, CanIObjectArgs } from '../interfaces/auth.interfaces';
export declare class AuthorizationService {
    canI({ email, allowDelete, allowEdit, allowView, level, ownerEmail, }: CanIObjectArgs): boolean;
    addEmailToAllowList({ list, email }: AddEmailToListArgs): string[];
    removeEmailFromAllowList({ list, email }: AddEmailToListArgs): string[];
    private canIView;
    private canIEdit;
    private canIDelete;
}
