import {CountryModel} from '#/country/infrastructure/models/country-model';

export const countriesSeed = async () => {
  CountryModel.deleteMany({}, () => {});
  CountryModel.insertMany([
    {
      id: '1',
      name: 'Brasil',
    },
    {
      id: '2',
      name: 'Portugal',
    },
    {
      id: '3',
      name: 'United States',
    },
    {
      id: '4',
      name: 'España',
    },
  ]);
};
