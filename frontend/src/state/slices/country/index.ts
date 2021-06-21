import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {initialState} from '#/state/slices/country/initial-state';
import {Country} from '#/domain/entities/country';

import {getCountries} from './get-countries';

export const countryState = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (state, action: PayloadAction<Country[]>) => {
      return {...state, countries: action.payload};
    });
  },
});

export const getCountriesAction = getCountries;
