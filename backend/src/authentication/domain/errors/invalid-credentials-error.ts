import {BaseError} from '#/common/errors/base-error';

export class InvalidCredentials extends BaseError {
  constructor() {
    super('InvalidCredentials', 'Invalid credentials');
  }
}
