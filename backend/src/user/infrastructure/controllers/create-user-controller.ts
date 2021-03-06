import {Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {JsonController, Res, Body, Post, Authorized} from 'routing-controllers';

import {User} from '#/user/domain/entities/user';
import {CreateUserCommand} from '#/user/domain/commands/create-user-command';
import {CreateUserRequest} from '#/user/infrastructure/controllers/requests/create-user-request';

@JsonController()
export class CreateUserController {
  public constructor(private readonly createUserCommand: CreateUserCommand) {}

  @Authorized()
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
