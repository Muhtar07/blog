import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('Get login Error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginError(state as StateSchema)).toBe('error');
    });
    test('Get login Error empty state', () => {
        const state: DeepPartial<StateSchema> = {

        };
        expect(getLoginError(state as StateSchema)).toBe('');
    });
});
