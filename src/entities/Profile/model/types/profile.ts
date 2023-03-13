import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../services/validateProfileData/validateProfileData';

export interface Profile {
    firstname?: string
    lastname?: string
    age?: number | string
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile,
    form?:Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    validateErrors?: ValidateProfileError[]
}
