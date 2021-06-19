import {BaseError} from '#/common/errors/base-error';

export class UserNotFound extends BaseError {
  constructor() {
    super('UserNotFound', 'User not found');
  }
}
