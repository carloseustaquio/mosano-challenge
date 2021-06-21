import {Cache} from '#/data/protocols/cache';

export class LocalCache implements Cache {
  private readonly localStoragePrefix = 'mosano-challenge';

  set(key: string, value: Record<string, unknown>): void {
    localStorage.setItem(
        `${this.localStoragePrefix}-${key}`,
        JSON.stringify(value),
    );
  }

  get(key: string): any {
    const item = localStorage.getItem(`${this.localStoragePrefix}-${key}`);
    return item ? JSON.parse(item) : undefined;
  }

  delete(key: string) {
    localStorage.removeItem(`${this.localStoragePrefix}-${key}`);
  }
}
