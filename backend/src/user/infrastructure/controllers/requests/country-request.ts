import {IsString} from 'class-validator';

export class CreateUserCountry {
	@IsString()
	public id!: string;

	@IsString()
	public name!: string
}
