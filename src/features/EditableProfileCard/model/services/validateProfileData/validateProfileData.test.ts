import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Profile } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/EditableProfileCardSchema';

const profile: Profile = {
    firstname: 'df',
    lastname: 'fff',
    age: 32,
    avatar: 'fvdsvx',
    currency: Currency.USD,
    country: Country.USA,
    city: 'Moscow',
    username: '1',
};

describe('validateProfileData', () => {
    test('success validate Profile Data', async () => {
        const result = validateProfileData(profile);

        expect(result).toEqual([]);
    });
    test('error validate no data', async () => {
        const result = validateProfileData();

        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });
    test('error validate INCORRECT_LASTNAME_OR_FIRSTNAME', async () => {
        const result = validateProfileData({ ...profile, firstname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_LASTNAME_OR_FIRSTNAME]);
    });
    test('error validate INCORRECT_CITY', async () => {
        const result = validateProfileData({ ...profile, city: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });
    test('error validate INCORRECT_CITY', async () => {
        const result = validateProfileData({ ...profile, avatar: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AVATAR]);
    });
    test('error validate INCORRECT_AGE', async () => {
        const result = validateProfileData({ ...profile, age: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test('error validate INCORRECT_AGE', async () => {
        const result = validateProfileData({ });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_LASTNAME_OR_FIRSTNAME,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CITY,
            ValidateProfileError.INCORRECT_AVATAR,
            ValidateProfileError.NO_COUNTRY,

        ]);
    });
});
