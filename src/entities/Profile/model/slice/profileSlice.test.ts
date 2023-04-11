import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../services/validateProfileData/validateProfileData';
import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema } from '../types/profile';

describe('counterSlice.tests', () => {
    test('updateProfile', () => {
        const state: ProfileSchema = {
            form: {
                avatar: 'f',
                firstname: 'ff',
                lastname: 'ff',
                currency: Currency.USD,
                city: 'Mo',
                country: Country.USA,
            },
        };
        expect(
            profileReducer(state, profileActions.updateProfile({ avatar: 'ccc' })),
        ).toEqual({ form: { ...state.form, avatar: 'ccc' } });
    });
    test('setReadonly', () => {
        const state: ProfileSchema = {
            readonly: false,
        };
        expect(profileReducer(state, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });
    test('cancelEditData', () => {
        const state: ProfileSchema = {
            form: {
                avatar: 'f',
                firstname: 'ff',
                lastname: 'ff',
                currency: Currency.USD,
                city: 'Mo',
                country: Country.USA,
            },
            readonly: false,
            validateErrors: [ValidateProfileError.INCORRECT_LASTNAME_OR_FIRSTNAME],
            data: {
                avatar: 'fcvds',
                firstname: 'fcsdcsdf',
                lastname: 'ffcdscs',
                currency: Currency.USD,
                city: 'Mscsco',
                country: Country.USA,
            },
        };
        expect(
            profileReducer(state, profileActions.cancelEditData()),
        ).toEqual({
            ...state, readonly: true, form: state.data, validateErrors: undefined,
        });
    });
});
