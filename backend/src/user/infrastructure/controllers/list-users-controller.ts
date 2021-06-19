import {ListUsersCommand} from '#/user/domain/commands/list-users-command';
import {User} from '#/user/domain/entities/user';
import {Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {JsonController, Get, Res} from 'routing-controllers';

@JsonController()
export class ListUsersController {
  public constructor(private readonly listUsersCommand: ListUsersCommand) {}

  @Get('/user')
  public async getAll(@Res() response: Response) {
    this.listUsersCommand.onSuccess = this.onSuccess(response);
    this.listUsersCommand.onError = this.onError(response);

    await this.listUsersCommand.getUsers();

    return response;
  }

  private onSuccess(response: Response) {
    return (users: User[]) => {
      response.status(StatusCodes.OK).send(users);
    };
  }

  private onError(response: Response) {
    return (error: Error) => {
      response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    };
  }
}
