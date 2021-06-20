import {ClassConstructor, plainToClass} from 'class-transformer';

export class HttpClientResponse {
  public constructor(
    private readonly statusCode: number,
    private readonly data: unknown,
  ) {}

  public getData<TResponse>(DataType: ClassConstructor<TResponse>): TResponse {
    return plainToClass(DataType, this.data);
  }

  public getArrayData<TResponse>(DataType: ClassConstructor<TResponse>): TResponse[] {
    return plainToClass(DataType, this.data as unknown[]);
  }

  public getRawData<T = any>(): T {
    return this.data as T;
  }

  public hasStatus(status: number): boolean {
    return this.statusCode === status;
  }
}
