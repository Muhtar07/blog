import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
    test('Get Profile isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { isLoading: true },
        };
        expect(getProfileIsLoading(state as StateSchema)).toBe(true);
    });
    test('Get profile isLoading empty state', () => {
        const state: DeepPartial<StateSchema> = {

        };
        expect(getProfileIsLoading(state as StateSchema)).toBe(undefined);
    });
});
