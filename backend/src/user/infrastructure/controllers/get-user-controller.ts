import {Request, Response} from 'express';
import {JsonController, Get, Body, Res} from 'routing-controllers';

@JsonController()
export class GetUsersController {
  @Get('/user')
  public getAll(@Body() request: Request, @Res() response: Response) {
    console.log(request);
    return response.send({no: 'user'});
  }
}
