import {createAsyncThunk} from '@reduxjs/toolkit';

import {AsyncThunkConfig} from '#/state/types';
import {Country} from '#/domain/entities/country';

export const getCountries = createAsyncThunk<
Country[],
void,
AsyncThunkConfig
>('country/getCountries', async (_, thunkAPI) => {
  return thunkAPI.extra.countryUseCases.getCountries();
});
