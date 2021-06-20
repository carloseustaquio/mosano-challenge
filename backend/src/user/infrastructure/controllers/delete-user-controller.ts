import {Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {JsonController, Res, Param, Delete, Authorized} from 'routing-controllers';

import {DeleteUserCommand} from '#/user/domain/commands/delete-user-command';
import {BaseError} from '#/common/errors/base-error';

@JsonController()
export class DeleteUserController {
  public constructor(private readonly deleteUserCommand: DeleteUserCommand) {}

  @Authorized()
  @Delete('/user/:id')
  public async delete(
		@Res() response: Response,
		@Param('id') id: string) {
    this.deleteUserCommand.onSuccess = this.onSuccess(response);
    this.deleteUserCommand.onUserNotFound = this.onUserNotFound(response);

    await this.deleteUserCommand.delete(id);

    return response;
  }

  private onSuccess(response: Response) {
    return () => {
      response.status(StatusCodes.OK).send();
    };
  }

  private onUserNotFound(response: Response) {
    return (error: BaseError) => {
      response.status(StatusCodes.NOT_FOUND).send(error.toPlain());
    };
  }
}
