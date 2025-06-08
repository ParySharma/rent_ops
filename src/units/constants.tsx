export const BUTTON_TYPE: any = {
  SUBMIT: 'submit',
  BUTTON: 'button',
  COLOR: 'link',
  PRIMARY: 'primary',
  DANGER: 'danger',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
};

export const BUTTON_VARIANT_TYPE: any = {
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
};

export const EMPTY_STRING = '';
export const EMPTY_ARRAY = [];
export const EMPTY_OBJECT = {};
export const UNDEFINED = undefined;
export const NULL = null;
export const EMPTY_FIELD = '--';
export const LIMIT = 10;
export const DATA_NOT_FOUND = 'No Record Found';

export const ERROR_CODE_1 = 'Error: Authorization Expired, try login again .';
export const ERROR_CODE_2 = 'ERR_EXPIRED_AUTHORIZATION';
export const RESET_STORE = 'RESET_STORE';

export const SCREEN_SOLUTION = {
  MOBILE: '@media (min-width: 320px) and (max-width: 639px)',
  TABLET: '@media (min-width: 640px) and (max-width: 899px)',
  LAPTOP: '@media (min-width: 900px) and (max-width: 1199px)',
  DESKTOP: '@media (min-width: 1200px) and (max-width: 1599px)',
  LARGE_DESKTOP: '@media (min-width: 1600px)',
};

export const validEmail =
  /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.?)+\.[a-zA-Z]{2,}$/;
export const validPasswordMin8 = /^.{8,}$/;
export const validPassword =
  /^(?!.*[\s])(?=.*[a-z])(?=.*[A-Z])((?=.*[0-9])|(?=.*[!@#$%^&*]))(?=.{8,})/;
export const validPhoneNumber = /^[1-9]{1}[0-9]{9}/;
export const validContactNumber = /^[0-9()+\- ]*$/; //allow special characters like +, -, (, )
export const validNumber = /^[0-9]*[.]?[1-9]{0,2}$/;

export const ACCESS_TOKEN_KEY: any =
  process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY || EMPTY_STRING;
export const REFRESH_TOKEN_KEY: any =
  process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY || EMPTY_STRING;
