import { defaultClasses, getModelForClass, prop } from '@typegoose/typegoose';
import { User } from '../../types/index.js';

export class UserEntity extends defaultClasses.TimeStamps implements User {
  @prop({ unique: true, required: true })
  public email: string;

  @prop({ required: false, default: '' })
  public avatarPath: string;

  @prop({ required: true })
  public firstName: string;

  @prop({ required: true })
  public lastName: string;
}

export const UserModel = getModelForClass(UserEntity);
