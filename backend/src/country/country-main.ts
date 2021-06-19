import {Container} from '#/container';
import {ListCountriesCommand} from '#/country/domain/command/list-countries-command';
import {ListCountriesController} from '#/country/infrastructure/controllers/list-countries-controller';
import {DbListCountriesRepository} from '#/country/infrastructure/repositories/db-list-countries-repository';

Container.set(
    ListCountriesController.name,
    new ListCountriesController(new ListCountriesCommand(new DbListCountriesRepository())),
);
