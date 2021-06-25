import {model, Schema, Document, Model} from 'mongoose';

import {User} from '#/user/domain/entities/user';

interface IUser {
  name: string;
  surname: string;
	birthdate: Date
	country: {
		id: string,
		name: string,
	},
}

interface UserDocument extends IUser, Document {
  toDomain(): User;
}

interface UserModel extends Model<UserDocument> {
  fromDomain(user: User): IUser;
}

const UserSchema = new Schema<UserDocument, UserModel>({
  id: {type: String, required: true},
  name: {type: String, required: true},
  surname: {type: String, required: true},
  birthdate: {type: Date, required: true},
  country: {
    id: {type: String, required: true},
    name: {type: String, required: true},
  },
});

UserSchema.methods.toDomain = function(this: UserDocument) {
  return new User(this.id, this.name, this.surname, this.country, this.birthdate);
};

UserSchema.statics.fromDomain = (user: User) => ({
  id: user.id,
  name: user.name,
  surname: user.surname,
  birthdate: user.birthdate,
  country: {
    id: user.country.id,
    name: user.country.name,
  },
});

export const UserModel = model('user', UserSchema);
