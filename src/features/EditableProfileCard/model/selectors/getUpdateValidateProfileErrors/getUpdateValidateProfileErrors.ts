import { StateSchema } from 'app/providers/StoreProvider';

export const getUpdateValidateProfileErrors = (state: StateSchema) => state.profile?.validateErrors;
