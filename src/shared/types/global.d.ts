declare global {
  /**
   * ⚠️ FSD
   *
   * Its hack way to export redux inferring types from @/app
   * and use it in @/shared/lib/store/<hooks>
   * https://habr.com/ru/companies/vk/articles/831148/
   */
  declare type RootState = import('../src/app/store/types').RootState;
  declare type RootAction = import('../src/app/store/types').RootAction;
}
export {};
