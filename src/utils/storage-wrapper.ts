type StorageKeys = "pepino-theme";

const storageLocal = {
  getItem: (key: StorageKeys) => {
    if (typeof window === "undefined") {
      throw new Error("Localstorage is not defined");
    }
    return localStorage.getItem(key);
  },
  setItem: (key: StorageKeys, value: string) => {
    if (typeof window === "undefined") {
      throw new Error("Localstorage is not defined");
    }
    localStorage.setItem(key, value);
  },
};

export default storageLocal;
