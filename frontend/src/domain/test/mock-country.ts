import {address, datatype} from 'faker';

import {Country} from '#/domain/entities/country';

export const mockCountry = () => new Country(datatype.uuid(), address.country());

export const mockCountryList = (length: number = 3) => new Array(length).map(() => mockCountry());
