import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency';
import { Select, SelectOption } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const currency: SelectOption<Currency>[] = [
    {
        value: Currency.RUB,
        content: Currency.RUB,
    },
    {
        value: Currency.CNY,
        content: Currency.CNY,
    },
    {
        value: Currency.USD,
        content: Currency.USD,
    },
];

const Template: ComponentStory<typeof Select> = (arg) => <Select {...arg} />;

export const Primary = Template.bind({});
Primary.args = {
    options: currency,
    label: 'Валюта',
};

export const Dark = Template.bind({});

Dark.args = {
    options: currency,
    label: 'Валюта',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
