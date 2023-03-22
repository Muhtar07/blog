import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../services/validateProfileData/validateProfileData';
import { getUpdateValidateProfileErrors } from './getUpdateValidateProfileErrors';

describe('getUpdateValidateProfileErrors', () => {
    test('getUpdateValidateProfileErrors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { validateErrors: [ValidateProfileError.SERVER_ERROR] },
        };
        expect(getUpdateValidateProfileErrors(state as StateSchema)).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    test('getUpdateValidateProfileErrors empty state', () => {
        const state: DeepPartial<StateSchema> = {

        };
        expect(getUpdateValidateProfileErrors(state as StateSchema)).toBe(undefined);
    });
});
