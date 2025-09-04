// Slanster/src/components/DlansterDashboard/cvBuilder/utils/browser.utils.ts

const isOnBrowser = (): boolean => {
  return typeof window !== "undefined";
};

class LS {
  private ls: Storage | null = null;

  constructor() {
    if (isOnBrowser()) {
      this.ls = window.localStorage;
    } else {
      console.error("Window is not defined");
    }
  }

  get<T = unknown>(key: string): T | null {
    if (!this.ls) return null;
    const item = this.ls.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  }

  set<T = unknown>({ key, payload }: { key: string; payload: T }): void {
    if (!this.ls) return;
    this.ls.setItem(key, JSON.stringify(payload));
  }

  remove(key: string): void {
    if (!this.ls) return;
    this.ls.removeItem(key);
  }

  clear(): void {
    if (!this.ls) return;
    this.ls.clear();
  }
}

export default new LS();
