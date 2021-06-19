import {UpdateUserCommand} from '#/user/domain/commands/update-user-command';
import {User} from '#/user/domain/entities/user';
import {Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {JsonController, Res, Body, Put, Param} from 'routing-controllers';
import {UpdateUserRequest} from '#/user/infrastructure/controllers/requests/update-user-request';

@JsonController()
export class UpdateUserController {
  public constructor(private readonly updateUserCommand: UpdateUserCommand) {}

  @Put('/user/:id')
  public async update(
		@Res() response: Response,
		@Body() body: UpdateUserRequest,
		@Param('id') id: string) {
    this.updateUserCommand.onSuccess = this.onSuccess(response);
    this.updateUserCommand.onError = this.onError(response);

    await this.updateUserCommand.update(body.toDomain(id));

    return response;
  }

  private onSuccess(response: Response) {
    return (users: User) => {
      response.status(StatusCodes.OK).send(users);
    };
  }

  private onError(response: Response) {
    return (error: Error) => {
      response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    };
  }
}
