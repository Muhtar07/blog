import { ComponentMeta, ComponentStory } from '@storybook/react';

import avatar from 'shared/assets/tests/avatar.png';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    form: {
        firstname: 'vvvvvv',
        lastname: 'vvvvvv',
        age: 12,
        avatar,
        city: 'Moscow',
        country: Country.USA,
        currency: Currency.USD,
    },
    readonly: true,
};

export const ProfileIsLoading = Template.bind({
});

ProfileIsLoading.args = {
    isLoading: true,
};

export const ProfileError = Template.bind({
});

ProfileError.args = {
    error: 'Произошла ошибка',
};
