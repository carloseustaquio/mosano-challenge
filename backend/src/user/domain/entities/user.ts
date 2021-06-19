import {Country} from '#/country/domain/entities/country';

export class User {
  public constructor(
		public id: string,
		public name: string,
		public surname: string,
		public country: Country,
		public birthdate: Date,
  ) {}
}
