import {Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {JsonController, Res, Body, Put, Param, Authorized} from 'routing-controllers';

import {User} from '#/user/domain/entities/user';
import {UpdateUserCommand} from '#/user/domain/commands/update-user-command';
import {UpdateUserRequest} from '#/user/infrastructure/controllers/requests/update-user-request';
import {BaseError} from '#/common/errors/base-error';

@JsonController()
export class UpdateUserController {
  public constructor(private readonly updateUserCommand: UpdateUserCommand) {}

  @Authorized()
  @Put('/user/:id')
  public async update(
		@Res() response: Response,
		@Body() body: UpdateUserRequest,
		@Param('id') id: string) {
    this.updateUserCommand.onSuccess = this.onSuccess(response);
    this.updateUserCommand.onUserNotFound = this.onUserNotFound(response);

    await this.updateUserCommand.update(body.toDomain(id));

    return response;
  }

  private onSuccess(response: Response) {
    return (users: User) => {
      response.status(StatusCodes.OK).send(users);
    };
  }

  private onUserNotFound(response: Response) {
    return (error: BaseError) => {
      response.status(StatusCodes.NOT_FOUND).send(error.toPlain());
    };
  }
}
