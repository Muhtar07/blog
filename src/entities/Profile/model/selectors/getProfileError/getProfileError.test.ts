import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    test('Get Profile Error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'dddd',
            },
        };
        expect(getProfileError(state as StateSchema)).toBe('dddd');
    });
    test('Get profile Error empty state', () => {
        const state: DeepPartial<StateSchema> = {

        };
        expect(getProfileError(state as StateSchema)).toBe(undefined);
    });
});
