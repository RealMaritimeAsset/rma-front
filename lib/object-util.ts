export const isContainObjectKey = (obj: Record<string, any>, key: string) => {
  const keys = Object.keys(obj);
  return keys.includes(key);
};
