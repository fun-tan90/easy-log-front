import { defHttp } from '/@/utils/http/axios';
import { LoginCaptchaParams } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  LoginCaptcha = '/captcha',
}

/**
 * @description: user login captcha api
 */
export function LoginCaptchaApi(params: LoginCaptchaParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<string>(
    {
      url: Api.LoginCaptcha,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
