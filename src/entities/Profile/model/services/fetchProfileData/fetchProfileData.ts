import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, thinkApi) => {
        const {
            extra: {
                api,
            },
            rejectWithValue,
        } = thinkApi;

        if (!profileId) {
            return rejectWithValue('нету id');
        }

        try {
            const response = await api.get<Profile>(`${RoutePath.profile}${profileId}`);

            if (!response.data) {
                throw new Error();
            }

            return response?.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
