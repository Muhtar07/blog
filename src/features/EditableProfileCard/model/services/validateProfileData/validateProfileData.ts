import { Profile } from 'entities/Profile';
import { ValidateProfileError } from '../../types/EditableProfileCardSchema';

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
