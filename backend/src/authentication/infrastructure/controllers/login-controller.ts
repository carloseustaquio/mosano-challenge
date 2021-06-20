import {Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {JsonController, Res, Body, Post} from 'routing-controllers';
import {BaseError} from '#/common/errors/base-error';
import {LoginCommand} from '#/authentication/domain/commands/login-command';
import {LoginRequest} from '#/authentication/infrastructure/controllers/requests/login-request';

@JsonController()
export class LoginController {
  public constructor(private readonly loginCommand: LoginCommand) {}

  @Post('/login')
  public async login(
		@Res() response: Response,
		@Body() body: LoginRequest) {
    this.loginCommand.onSuccess = this.onSuccess(response);
    this.loginCommand.onInvalidCredentials = this.onInvalidCredentials(response);

    await this.loginCommand.login(body.toDomain());

    return response;
  }

  private onSuccess(response: Response) {
    return (token: string) => {
      response.status(StatusCodes.OK).send({token});
    };
  }

  private onInvalidCredentials(response: Response) {
    return (error: BaseError) => {
      response.status(StatusCodes.BAD_REQUEST).send(error.toPlain());
    };
  }
}
