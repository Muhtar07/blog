import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextSize } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextSizeS = Template.bind({

});
TextSizeS.args = {
    title: 'Test',
    text: 'testing',
    size: TextSize.S,
};

export const TextSizeM = Template.bind({

});
TextSizeM.args = {
    title: 'Test',
    text: 'testing',
    size: TextSize.M,
};

export const TextSizeL = Template.bind({

});
TextSizeL.args = {
    title: 'Test',
    text: 'testing',
    size: TextSize.L,
};
