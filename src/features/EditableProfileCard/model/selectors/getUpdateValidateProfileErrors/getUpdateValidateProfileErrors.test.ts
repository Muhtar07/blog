import { StateSchema } from 'app/providers/StoreProvider';
import { getUpdateValidateProfileErrors } from './getUpdateValidateProfileErrors';
import { ValidateProfileError } from '../../types/EditableProfileCardSchema';

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
