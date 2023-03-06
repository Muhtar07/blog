import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginModal } from './LoginModal';

export default {
    title: 'features/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Primary = Template.bind({

});

Primary.args = {
    isOpen: true,
};
Primary.decorators = [StoreDecorator({ loginForm: { username: '1', password: '1' } })];

export const Error = Template.bind({

});

Error.args = {
    isOpen: true,
};
Error.decorators = [StoreDecorator({
    loginForm: {
        username: '1',
        password: '1',
        error: 'Произошла ошибка',
    },
}),
];

export const IsLoading = Template.bind({

});

IsLoading.args = {
    isOpen: true,
};
IsLoading.decorators = [StoreDecorator({
    loginForm: {
        username: '1',
        password: '1',
        isLoading: true,
    },
}),
];
