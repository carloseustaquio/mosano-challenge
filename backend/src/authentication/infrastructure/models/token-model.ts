import {model, Schema, Document, Model} from 'mongoose';

interface IToken {
  token: string;
}

interface TokenDocument extends IToken, Document {}

interface TokenModel extends Model<TokenDocument> {}

const TokenSchema = new Schema<TokenDocument, TokenModel>({
  token: {type: String, required: true},
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
    index: {expires: 3600},
  },
});

export const TokenModel = model('token', TokenSchema);
