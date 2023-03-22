import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile } from '../../types/profile';
import { validateProfileData, ValidateProfileError } from '../validateProfileData/validateProfileData';

export const putProfileData = createAsyncThunk<Profile, string, ThunkConfig<ValidateProfileError[]>>(
    'profile/putProfileData',
    async (profileId, thinkApi) => {
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
            const response = await api.put<Profile>(`${RoutePath.profile}${profileId}`, formData);

            if (!response.data) {
                return rejectWithValue([ValidateProfileError.NO_DATA]);
            }

            return response?.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
