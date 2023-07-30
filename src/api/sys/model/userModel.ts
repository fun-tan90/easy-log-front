/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
  captchaKey: string;
  captchaValue: string;
  rememberMe: boolean;
}

/**
 * @description: Login Captcha interface parameters
 */
export interface LoginCaptchaParams {
  captchaKey: string; //获取验证码时随机KEY
  width: number; //验证码宽度 默认130
  height: number; //验证码高度 默认48
  len: number; //验证码计算位数 默认2
  survival: number; //验证码有效时间min 默认5min
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
// export interface LoginResultModel {
//   userId: string | number
//   token: string
//   role: RoleInfo
// }

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  // 角色集合
  roles: string[];
  // 权限集合
  permissions: string[];
  // 用户id
  userId: string | number;
  // 用户名
  userName: string;
}
