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
    this.listCountriesCommand.onError = this.onError(response);

    await this.listCountriesCommand.getCountries();

    return response;
  }

  private onSuccess(response: Response) {
    return (countries: Country[]) => {
      response.status(StatusCodes.OK).send(countries);
    };
  }

  private onError(response: Response) {
    return (error: Error) => {
      response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    };
  }
}
