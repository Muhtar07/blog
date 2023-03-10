import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUserName {
    username: string,
    password: string,
}

export const loginByUsername = createAsyncThunk<User, LoginByUserName, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thinkApi) => {
        const {
            extra: {
                api,
            },
            dispatch,
            rejectWithValue,
        } = thinkApi;
        try {
            const response = await api.post<User>('/login', authData);
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
