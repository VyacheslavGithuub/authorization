export interface IUserRegistration {
  [k: string]: FormDataEntryValue;
}
export interface IUserRegistrationResponse {
  status: string;
}
export interface IUserLogin {
  [k: string]: FormDataEntryValue;
}
export interface IUserLoginResponse {
  status: string;
  token: string;
}
export interface IExitUser {
  token: string;
}
export interface IExitUserResponse {
  status: string | undefined;
}
