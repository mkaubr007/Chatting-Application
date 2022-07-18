export interface IUserRegister {
  name: string;
  email: string;
  username: string;
  mobile: number;
  password: string;
  birthplace: string;
  favoriteplace: string
}

export interface IRegisterData {
  data?: IUserRegister;
  message: string;
  status: number;
  userId?: string;
}


export interface IUserLogin {
  email: string;
  password: string;
}
export interface IAuth {
  access_token: string;
  token_type: string;
  user: IUser;
  permission?: number;
}

export interface IUserRole {
  id: string;
  name: string;
}

export interface IName {
  name: string
}


export interface IMetaData {
  uniqueName: string;
  url?: string;
}

export interface IUser {
  email: string;
  password: string;
  role: IUserRole;
  token: string;
  histories: [];
  name: IName;
  createdDate: string;
  specialities: [];
  status: string;
  _id: string;
  lastLogin?: Date;
  meta?: IMetaData;
  newNotificationCount?: number;
}

export interface IForgotOrResetPassword {
  email?: string;
  password?: string;
}

export interface IForgotOrResetPasswordData {
  data?: IForgotOrResetPassword;
  message: string;
  status: number;
  userId?: string;
}