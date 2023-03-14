import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileAge } from './getProfileAge';

describe('getProfileAge', () => {
    test('Get Profile Age', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    age: 21,
                },
            },
        };
        expect(getProfileAge(state as StateSchema)).toBe(21);
    });
    test('Get profile age empty state', () => {
        const state: DeepPartial<StateSchema> = {

        };
        expect(getProfileAge(state as StateSchema)).toBe(undefined);
    });
});
