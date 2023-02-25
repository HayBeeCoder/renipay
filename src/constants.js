const REGEX_EMAIL =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const REGEX_ALPHANUMERIC_AT_LEAST_ONE_SYMBOL_AND_UPPERCASE =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;
//  EGEX_ALPHANUMERIC_AT_LEAST_ONE_SYMBOL_AND_UPPERCASE = /^(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&()_+-={}|[]\:;'<>,.?\/]).+$/
// const REGEX_ALPHANUMERIC_AT_LEAST_ONE_SYMBOL_AND_UPPERCASE = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/

const STORAGE_PREFIX = "waptv_vod_";

const INVALID_AUTH_MESSAGE = "Invalid auth token";
const AUTH_IS_REQUIRED = "Auth is required";
const FORGET_PASSWORD = "forget_password";
const REGISTER = "register";
const RESET = "reset";
const SERIES = "series";
const NO_MOVIES_IN_WATCHLIST = "No movies in watchlist";
const NO_MOVIES_IN_FAVOURITES = "No movies in favourites";
const MAX_MOBILE_WIDTH = 767;
const COMMENTS_PER_PAGE = 3;
const NO_ACTIVE_SUBSCRIPTION = "No active subscription";
// const PLEASE
const MOVIE = "movie";
const FULLMOVIE = "fullMovie";
export {
  MAX_MOBILE_WIDTH,
  REGEX_EMAIL,
  STORAGE_PREFIX,
  INVALID_AUTH_MESSAGE,
  AUTH_IS_REQUIRED,
  REGISTER,
  FORGET_PASSWORD,
  RESET,
  SERIES,
  NO_MOVIES_IN_WATCHLIST,
  NO_MOVIES_IN_FAVOURITES,
  COMMENTS_PER_PAGE,
  NO_ACTIVE_SUBSCRIPTION,
  REGEX_ALPHANUMERIC_AT_LEAST_ONE_SYMBOL_AND_UPPERCASE,
  MOVIE,
  FULLMOVIE,
};
