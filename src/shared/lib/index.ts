export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

type MatchedParams = Record<string, string>;
type MatchResult = { params: MatchedParams } | null;

export const matchPath = (path: string, currentPath: string): MatchResult => {
  const pattern = path
    .replace(/:\w+/g, '([^/]+)') // замена :id → ([^/]+)
    .replace(/\//g, '\\/'); // экранирование слэшей

  const regex = new RegExp(`^${pattern}$`);
  const match = currentPath.match(regex);

  if (!match) return null;

  // Извлекаем параметры из path
  const paramNames = Array.from(path.matchAll(/:(\w+)/g), (m) => m[1]);
  const params = paramNames.reduce<MatchedParams>((acc, name, index) => {
    acc[name] = match[index + 1];
    return acc;
  }, {});

  return { params };
};
