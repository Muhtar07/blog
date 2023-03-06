import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextErrorSizeM = Template.bind({

});
TextErrorSizeM.args = {
    text: 'TEST',
    theme: TextTheme.ERROR,
    size: TextSize.M,
};

export const TextErrorSizeL = Template.bind({

});
TextErrorSizeL.args = {
    text: 'TEST',
    theme: TextTheme.ERROR,
    size: TextSize.L,

};

export const TextErrorSizeXL = Template.bind({

});
TextErrorSizeXL.args = {
    text: 'TEST',
    theme: TextTheme.ERROR,
    size: TextSize.XL,

};

export const TextPrimary = Template.bind({

});
TextPrimary.args = {
    text: 'TEST',
    theme: TextTheme.PRIMARY,
};

export const TextPrimaryDark = Template.bind({

});
TextPrimaryDark.args = {
    text: 'TEST',
    theme: TextTheme.PRIMARY,
};

TextPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextSecondary = Template.bind({

});
TextSecondary.args = {
    text: 'TEST',
    theme: TextTheme.SECONDARY,
};
