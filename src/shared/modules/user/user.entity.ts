import { User } from '../../types/index.js';

export class UserEntity implements User {
  public email: string;
  public avatarPath: string;
  public firstName: string;
  public lastName: string;
}
