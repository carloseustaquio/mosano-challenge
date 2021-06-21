export interface Cache {
  get(key: string): any;
	set(key: string, value: Record<string, unknown>): void;
  delete(key: string): void;
}
