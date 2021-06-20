import {IsDateString, IsNotEmpty, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';

import {Country} from '#/country/domain/entities/country';
import {User} from '#/user/domain/entities/user';
import {CreateUserCountry} from '#/user/infrastructure/controllers/requests/country-request';

export class UpdateUserRequest {
	@IsString()
	public name!: string;

	@IsString()
	public surname!: string;

	@IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateUserCountry)
	public country!: CreateUserCountry;

	@IsDateString()
	public birthdate!: string;

	public toDomain(id: string): User {
	  return new User(
	      id,
	      this.name,
	      this.surname,
	      new Country(this.country.id, this.country.name),
	      new Date(this.birthdate),
	  );
	}
}
