import {CreateUserCommand} from '#/user/domain/commands/create-user-command';
import {User} from '#/user/domain/entities/user';
import {Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {JsonController, Res, Body, Post} from 'routing-controllers';
import {CreateUserRequest} from '#/user/infrastructure/controllers/requests/create-user-request';

@JsonController()
export class CreateUserController {
  public constructor(private readonly createUserCommand: CreateUserCommand) {}

  @Post('/user')
  public async create(@Res() response: Response, @Body() body: CreateUserRequest) {
    this.createUserCommand.onSuccess = this.onSuccess(response);

    await this.createUserCommand.create(body.toDomain());

    return response;
  }

  private onSuccess(response: Response) {
    return (users: User) => {
      response.status(StatusCodes.CREATED).send(users);
    };
  }
}
