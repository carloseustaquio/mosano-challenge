import {model, Schema, Document, Model} from 'mongoose';

import {Country} from '#/country/domain/entities/country';

interface ICountry {
  name: string;
}

interface CountryDocument extends ICountry, Document {
  toDomain(): Country;
}

interface CountryModel extends Model<CountryDocument> {
  fromDomain(country: Country): ICountry;
}

const CountrySchema = new Schema<CountryDocument, CountryModel>({
  id: {type: String, required: true},
  name: {type: String, required: true},
});

CountrySchema.methods.toDomain = function(this: CountryDocument) {
  return new Country(this.id, this.name);
};

CountrySchema.statics.fromDomain = (country: Country) => ({
  id: country.id,
  name: country.name,
});

export const CountryModel = model('country', CountrySchema);
