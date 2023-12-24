import { Injectable } from '@nestjs/common';

import {
  AddEmailToListArgs,
  AuthorizationLevel,
  CanIObjectArgs,
} from '../interfaces/auth.interfaces';

@Injectable()
export class AuthorizationService {
  public canI({
    email,
    allowDelete,
    allowEdit,
    allowView,
    level = AuthorizationLevel.View,
    ownerEmail,
  }: CanIObjectArgs) {
    if (email === ownerEmail) return true;

    switch (level) {
      case AuthorizationLevel.View:
        return this.canIView({ email, allowView });
      case AuthorizationLevel.Edit:
        return this.canIEdit({ email, allowEdit });
      case AuthorizationLevel.Delete:
        return this.canIDelete({ email, allowDelete });
      default:
        return false;
    }
  }

  public addEmailToAllowList({ list, email }: AddEmailToListArgs) {
    if (!list) {
      return [email];
    }

    return [...new Set([...list, email])];
  }

  public removeEmailFromAllowList({ list, email }: AddEmailToListArgs) {
    if (!list) {
      return [];
    }

    return [...new Set(list.filter((listEmail) => listEmail !== email))];
  }

  private canIView({
    email,
    allowView,
  }: {
    email: string;
    allowView?: string[];
  }) {
    if (!allowView) {
      return false;
    }

    return allowView.includes(email);
  }

  private canIEdit({
    email,
    allowEdit,
  }: {
    email: string;
    allowEdit?: string[];
  }) {
    if (!allowEdit) {
      return false;
    }

    return allowEdit.includes(email);
  }

  private canIDelete({
    email,
    allowDelete,
  }: {
    email: string;
    allowDelete?: string[];
  }) {
    if (!allowDelete) {
      return false;
    }

    return allowDelete.includes(email);
  }
}
