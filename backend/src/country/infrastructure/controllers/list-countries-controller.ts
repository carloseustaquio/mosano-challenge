import {StatusCodes} from 'http-status-codes';
import {JsonController, Get, Res} from 'routing-controllers';
import {Response} from 'express';

import {ListCountriesCommand} from '#/country/domain/command/list-countries-command';
import {Country} from '#/country/domain/entities/country';

@JsonController()
export class ListCountriesController {
  public constructor(private listCountriesCommand: ListCountriesCommand) {}

  @Get('/country')
  public async getAll(@Res() response: Response) {
    this.listCountriesCommand.onSuccess = this.onSuccess(response);

    await this.listCountriesCommand.getCountries();

    return response;
  }

  private onSuccess(response: Response) {
    return (countries: Country[]) => {
      response.status(StatusCodes.OK).send(countries);
    };
  }
}
