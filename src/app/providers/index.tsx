import compose from './compose';

/** Используем функцию compose для создания HOC withProviders,
который последовательно оборачивает компонент в провайдеры маршрутизатора, хранилища и темы. */

export const withProviders = compose();
