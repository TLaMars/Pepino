export function storePersisted(key: string, value: any) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function retrievePersisted<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(key);
  try {
    if (value) return JSON.parse(value);
  } catch {
    return null;
  }
  return null;
}

export function clearPersisted(key: string) {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(key);
}
