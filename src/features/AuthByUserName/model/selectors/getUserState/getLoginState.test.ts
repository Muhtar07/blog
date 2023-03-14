import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.tests', () => {
    test('tests getting login state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '2',
                password: '3',
            },
            user: {
                authData: {
                    username: 'admin',
                    id: '1',
                },
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual(state.loginForm);
    });
});
