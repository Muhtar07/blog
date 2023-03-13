import { Profile } from '../../types/profile';

export enum ValidateProfileError {
     INCORRECT_LASTNAME_OR_FIRSTNAME = 'NO_LASTNAME_OR_FIRSTNAME',
     INCORRECT_AGE='NO_AGE',
     INCORRECT_CITY='NO_CITY',
     INCORRECT_AVATAR='NO_AVATAR',
     NO_COUNTRY='NO_COUNTRY',
     SERVER_ERROR='SERVER_ERROR',
     NO_DATA = 'NO_DATA',
}

export const validateProfileData = (profile?: Profile):ValidateProfileError[] => {
    const errors: ValidateProfileError[] = [];

    if (!profile) {
        errors.push(ValidateProfileError.NO_DATA);
        return errors;
    }

    const {
        firstname,
        lastname,
        age,
        city,
        avatar,
        country,
    } = profile;

    if (!firstname || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_LASTNAME_OR_FIRSTNAME);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }
    if (!avatar) {
        errors.push(ValidateProfileError.INCORRECT_AVATAR);
    }
    if (!country) {
        errors.push(ValidateProfileError.NO_COUNTRY);
    }

    return errors;
};
