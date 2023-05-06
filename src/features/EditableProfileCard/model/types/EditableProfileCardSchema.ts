import { Profile } from 'entities/Profile';

export enum ValidateProfileError {
    INCORRECT_LASTNAME_OR_FIRSTNAME = 'INCORRECT_LASTNAME_OR_FIRSTNAME',
    INCORRECT_AGE='INCORRECT_AGE',
    INCORRECT_CITY='INCORRECT_CITY',
    INCORRECT_AVATAR='INCORRECT_AVATAR',
    NO_COUNTRY='NO_COUNTRY',
    SERVER_ERROR='SERVER_ERROR',
    NO_DATA = 'NO_DATA',
}
export interface ProfileSchema {
    data?: Profile;
    form?:Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: ValidateProfileError[];
}
