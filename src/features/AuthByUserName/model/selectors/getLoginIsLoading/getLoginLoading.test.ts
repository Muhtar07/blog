import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginLoading.tests', () => {
    test('tests getting login is loading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    });
    test('Get login is loading empty state', () => {
        const state: DeepPartial<StateSchema> = {

        };
        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    });
});
