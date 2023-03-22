import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../validateProfileData/validateProfileData';
import { putProfileData } from './putProfileData';
import { Profile } from '../../types/profile';

const profile: Profile = {
    firstname: 'dfggg',
    lastname: 'fff',
    age: 32,
    avatar: 'fvdsvx',
    currency: Currency.USD,
    country: Country.USA,
    city: 'Moscow',
    username: '1',
};

describe('fetchProfileData', () => {
    test('success put profile', async () => {
        const thunk = new TestAsyncThunk(putProfileData, {
            profile: {
                form: profile,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profile }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profile);
    });
    test('error put profile', async () => {
        const thunk = new TestAsyncThunk(putProfileData, {
            profile: {
                form: profile,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.payload).toEqual([ValidateProfileError.NO_DATA]);
    });
    test('error validate incorrect lastname or firstname', async () => {
        const thunk = new TestAsyncThunk(putProfileData, {
            profile: {
                form: { ...profile, lastname: '' },
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_LASTNAME_OR_FIRSTNAME]);
    });
});
