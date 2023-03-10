import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thinkApi) => {
        const {
            extra: {
                api,
            },
            rejectWithValue,
        } = thinkApi;
        try {
            const response = await api.get<Profile>('/profile');

            return response?.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
