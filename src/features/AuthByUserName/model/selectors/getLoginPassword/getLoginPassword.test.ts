import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('test getting login password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toBe('123');
    });
    test('Get login is password empty state', () => {
        const state: DeepPartial<StateSchema> = {

        };
        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});
