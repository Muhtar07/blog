import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '1223',
        };

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUserName('1223'),
        )).toEqual({ username: '1223' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '1223',
        };

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('1223'),
        )).toEqual({ password: '1223' });
    });
});
