import {differenceInYears, getDate, getMonth} from 'date-fns';

import {Country} from '#/domain/entities/country';

export class User {
  public constructor(
    public id: string,
    public name: string,
    public surname: string,
    public country: Country,
    public birthdate: Date,
  ) {}

  public fullName() {
    return `${this.name} ${this.surname}`;
  }

  public birthdayDay() {
    return getDate(this.birthdate);
  }

  public birthdayMonth() {
    return getMonth(this.birthdate) + 1;
  }

  public nextAge() {
    return differenceInYears(new Date(), this.birthdate) + 1;
  }
}
