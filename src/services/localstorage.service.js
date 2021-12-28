export class LocalStorageService {
  static hasKey(key) {
    return localStorage.getItem(key) !== null;
  }

  static removeItem(key) {
    return localStorage.removeItem(key);
  }

  static getItem(key) {
    const item = localStorage.getItem(key);

    try {
      return item !== null ? JSON.parse(item) : undefined;
    } catch (error) {
      return undefined;
    }
  }

  static setItem(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static clear() {
    localStorage.clear();
  }
}
