import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    test('Get Profile data', () => {
        const data = {
            firstname: 'vvvvvv',
            lastname: 'vvvvvv',
            age: 12,
            city: 'Moscow',
            country: Country.USA,
            currency: Currency.USD,
        };
        const state: DeepPartial<StateSchema> = {
            profile: { data },
        };
        expect(getProfileData(state as StateSchema)).toBe(data);
    });
    test('Get profile data empty state', () => {
        const state: DeepPartial<StateSchema> = {

        };
        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});
