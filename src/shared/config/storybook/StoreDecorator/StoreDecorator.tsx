import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?:ReducersList,
) => (StoryDecorator: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{
            ...defaultAsyncReducers,
            ...asyncReducers,
        }}
    >
        <StoryDecorator />
    </StoreProvider>

);
