import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from 'shared/assets/tests/avatar.png';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({
});

Normal.args = {};

Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            firstname: 'Мухтар',
            lastname: 'Беканов',
            age: 31,
            avatar,
            username: 'NART666',
            city: 'Moscow',
            country: Country.USA,
            currency: Currency.USD,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            firstname: 'Мухтар',
            lastname: 'Беканов',
            age: 31,
            avatar,
            username: 'NART666',
            city: 'Moscow',
            country: Country.USA,
            currency: Currency.USD,
        },
    },
})];

export const Readonly = Template.bind({
});

Readonly.args = {};

Readonly.decorators = [StoreDecorator({
    profile: {
        form: {
            firstname: 'Мухтар',
            lastname: 'Беканов',
            age: 31,
            avatar,
            username: 'NART666',
            city: 'Moscow',
            country: Country.USA,
            currency: Currency.USD,
        },
        readonly: true,
    },
})];

export const Error = Template.bind({
});

Error.args = {};

Error.decorators = [StoreDecorator({
    profile: {
        form: {
            firstname: 'Мухтар',
            lastname: 'Беканов',
            age: 31,
            avatar,
            username: 'NART666',
            city: 'Moscow',
            country: Country.USA,
            currency: Currency.USD,
        },
        error: 'Произошла ошибка',
    },
})];

export const IsLoadingProfile = Template.bind({
});

IsLoadingProfile.args = {};

IsLoadingProfile.decorators = [StoreDecorator({
    profile: {
        form: {
            firstname: 'Мухтар',
            lastname: 'Беканов',
            age: 31,
            avatar,
            username: 'NART666',
            city: 'Moscow',
            country: Country.USA,
            currency: Currency.USD,
        },
        isLoading: true,
    },
})];

export const ValidatorError = Template.bind({
});

ValidatorError.args = {};

ValidatorError.decorators = [StoreDecorator({
    profile: {
        form: {
            firstname: 'Мухтар',
            lastname: 'Беканов',
            age: 31,
            avatar,
            username: 'NART666',
            city: 'Moscow',
            country: Country.USA,
            currency: Currency.USD,
        },
        validateErrors: [
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_CITY,
            ValidateProfileError.NO_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_AVATAR,
            ValidateProfileError.NO_COUNTRY,
            ValidateProfileError.INCORRECT_LASTNAME_OR_FIRSTNAME,
        ],
    },
})];
