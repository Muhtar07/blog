import { StateSchema } from 'app/providers/StoreProvider';

export const getUserUnited = (state: StateSchema) => state.user?._inited || false;
