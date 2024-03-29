import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.tests', () => {
    test('tests getting username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toBe('admin');
    });
    test('Get login is username empty state', () => {
        const state: DeepPartial<StateSchema> = {

        };
        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});
