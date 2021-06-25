import {model, Schema, Document, Model} from 'mongoose';

interface ISignedUser {
  email: string;
  password: string;
}

interface SignedUserDocument extends ISignedUser, Document {}

interface SignedUserModel extends Model<SignedUserDocument> {}

const SignedUserSchema = new Schema<SignedUserDocument, SignedUserModel>({
  email: {type: String, required: true},
  password: {type: String, required: true},
});

export const SignedUserModel = model('signed-user', SignedUserSchema);
