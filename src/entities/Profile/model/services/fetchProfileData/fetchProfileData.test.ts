import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Profile } from '../../types/profile';
import { Currency } from '../../../../Currency';
import { Country } from '../../../../Country';
import { fetchProfileData } from './fetchProfileData';

const profile: Profile = {
    id: '1',
    firstname: 'df',
    lastname: 'fff',
    age: 32,
    avatar: 'fvdsvx',
    currency: Currency.USD,
    country: Country.USA,
    city: 'Moscow',
    username: '1',
};

describe('fetchProfileData', () => {
    test('success get profile', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: profile }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profile);
    });
    test('error get profile', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.payload).toBe('error');
    });
});
