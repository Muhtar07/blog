import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('Get Profile form', () => {
        const form = {
            firstname: 'vvvvvv',
            lastname: 'vvvvvv',
            age: 12,
            city: 'Moscow',
            country: Country.USA,
            currency: Currency.USD,
        };
        const state: DeepPartial<StateSchema> = {
            profile: { form },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('Get profile form empty state', () => {
        const state: DeepPartial<StateSchema> = {

        };
        expect(getProfileForm(state as StateSchema)).toBe(undefined);
    });
});
