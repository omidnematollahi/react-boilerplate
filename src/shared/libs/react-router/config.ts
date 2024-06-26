import { SlugPageParams, UsernamePageParams } from './react-router.types';

export const pathKeys = {
  root: '/',
  login() {
    return pathKeys.root.concat('login/');
  },
  register() {
    return pathKeys.root.concat('register/');
  },
  home() {
    return pathKeys.root;
  },
  profile: {
    root() {
      return pathKeys.root.concat('profile/');
    },
    byUsername({ username }: UsernamePageParams) {
      return pathKeys.profile.root().concat(username, '/');
    },
    byUsernameFavorites({ username }: UsernamePageParams) {
      return pathKeys.profile.byUsername({ username }).concat('favorites/');
    },
  },
};
