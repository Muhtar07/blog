import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from 'shared/ui/Text/Text';
import { MyButton } from 'shared/ui/MyButton/MyButton';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: (
        <div>
            <Text text="test" />
            <MyButton>
                test
            </MyButton>
        </div>
    ),
};

export const Dark = Template.bind({});
Dark.args = {
    children: (
        <div>
            <Text text="test" />
            <MyButton>
                test
            </MyButton>
        </div>
    ),
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
