import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ListBox, ListBoxItem } from './ListBox';

const items: ListBoxItem<string>[] = [
    {
        value: 'a',
        content: 'a',
        disabled: true,
    },
    {
        value: 'b',
        content: 'b',
    },
    {
        value: 'c',
        content: 'c',
    },
];

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (arg) => <ListBox {...arg} />;

export const Light = Template.bind({});
Light.args = {
    items,
    defaultValue: items[1].value,
    label: 'Выберите валюту',
    onChange: () => {},
};

export const Dark = Template.bind({});
Dark.args = {
    items,
    defaultValue: items[1].value,
    label: 'Выберите валюту',
    onChange: () => {},
    readonly: true,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
