import {datatype, date, name} from 'faker';

import {User} from '#/domain/entities/user';

import {mockCountry} from './mock-country';

export const mockUser = () => new User(datatype.uuid(), name.firstName(), name.lastName(), mockCountry(), date.past());

export const mockUserList = (length: number = 3) => new Array(length).map(() => mockUser());
