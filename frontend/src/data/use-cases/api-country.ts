import {Country} from '#/domain/entities/country';
import {CountryUseCases} from '#/domain/use-cases/country';
import {HttpClient} from '#/data/protocols/http-client';

export class ApiCountryUseCases implements CountryUseCases {
  public constructor(private readonly httpClient: HttpClient) {}

  public async getCountries(): Promise<Country[]> {
    const response = await this.httpClient.request({
      method: 'get',
      path: '/country',
    });
    return response.getArrayData(Country);
  }
}
