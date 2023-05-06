import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
    test('Get Profile Readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { readonly: true },
        };
        expect(getProfileReadonly(state as StateSchema)).toBe(true);
    });
    test('Get profile Readonly empty state', () => {
        const state: DeepPartial<StateSchema> = {

        };
        expect(getProfileReadonly(state as StateSchema)).toBe(undefined);
    });
});
