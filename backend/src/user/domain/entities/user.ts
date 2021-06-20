import {differenceInYears, getDate, getMonth, getYear, isFuture} from 'date-fns';

import {Country} from '#/country/domain/entities/country';

export class User {
  public constructor(
		public id: string,
		public name: string,
		public surname: string,
		public country: Country,
		public birthdate: Date,
		public nextBirthday?: Date,
		public nextAge?: number,
  ) {}

  public withNextBirthdayAndAge() {
    const today = new Date();
    const day = getDate(this.birthdate) + 1;
    const month = getMonth(this.birthdate);
    const year = getYear(today);
    console.log({day, month, year});

    const possibleNextBirthday = new Date(year, month, day);

    if (isFuture(possibleNextBirthday)) {
      this.nextBirthday = possibleNextBirthday;
    } else {
      this.nextBirthday = new Date(year + 1, month, day);
    }

    this.nextAge = differenceInYears(this.nextBirthday, this.birthdate);

    return this;
  }
}
