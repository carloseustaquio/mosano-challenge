export class BaseError extends Error {
  constructor(
		public name: string,
		public message: string,
  ) {
    super(message);
  }

  public toPlain() {
    return {
      code: this.name,
      message: this.message,
    };
  }
}
