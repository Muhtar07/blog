import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile } from '../../types/profile';
import { validateProfileData, ValidateProfileError } from '../validateProfileData/validateProfileData';

export const putProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/putProfileData',
    async (_, thinkApi) => {
        const {
            extra: {
                api,
            },
            getState,
            rejectWithValue,
        } = thinkApi;

        const formData = getProfileForm(getState());

        const errors: ValidateProfileError[] = validateProfileData(formData);

        if (errors.length) {
            throw rejectWithValue(errors);
        }

        try {
            const response = await api.put<Profile>('/profile', formData);

            return response?.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
