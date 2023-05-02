import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>Flex</div>
            <div>Flex</div>
            <div>Flex</div>
        </>
    ),
    direction: 'row',
};

export const Column = Template.bind({});
Column.args = {
    children: (
        <>
            <div>Flex</div>
            <div>Flex</div>
            <div>Flex</div>
        </>
    ),
    direction: 'column',
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    children: (
        <>
            <div>Flex</div>
            <div>Flex</div>
            <div>Flex</div>
        </>
    ),
    direction: 'row',
    gap: '4',
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
    children: (
        <>
            <div>Flex</div>
            <div>Flex</div>
            <div>Flex</div>
        </>
    ),
    direction: 'column',
    gap: '4',
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    children: (
        <>
            <div>Flex</div>
            <div>Flex</div>
            <div>Flex</div>
        </>
    ),
    direction: 'row',
    gap: '32',
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    children: (
        <>
            <div>Flex</div>
            <div>Flex</div>
            <div>Flex</div>
        </>
    ),
    direction: 'column',
    gap: '32',
};

export const AlignRowCenter = Template.bind({});
AlignRowCenter.args = {
    children: (
        <>
            <div>Flex</div>
            <div>Flex</div>
            <div>Flex</div>
        </>
    ),
    direction: 'row',
    align: 'center',
};

export const AlignColumnCenter = Template.bind({});
AlignColumnCenter.args = {
    children: (
        <>
            <div>Flex</div>
            <div>Flex</div>
            <div>Flex</div>
        </>
    ),
    direction: 'column',
    gap: '32',
    align: 'center',
};

export const AlignRowEnd = Template.bind({});
AlignRowEnd.args = {
    children: (
        <>
            <div>Flex</div>
            <div>Flex</div>
            <div>Flex</div>
        </>
    ),
    direction: 'row',
    align: 'end',
};

export const AlignColumnEnd = Template.bind({});
AlignColumnEnd.args = {
    children: (
        <>
            <div>Flex</div>
            <div>Flex</div>
            <div>Flex</div>
        </>
    ),
    direction: 'column',
    gap: '32',
    align: 'end',
};

export const JustifyRowEnd = Template.bind({});
JustifyRowEnd.args = {
    children: (
        <>
            <div>Flex</div>
            <div>Flex</div>
            <div>Flex</div>
        </>
    ),
    direction: 'row',
    justify: 'end',
};

export const JustifyColumnEnd = Template.bind({});
JustifyColumnEnd.args = {
    children: (
        <>
            <div>Flex</div>
            <div>Flex</div>
            <div>Flex</div>
        </>
    ),
    direction: 'column',
    gap: '32',
    justify: 'end',
};

export const JustifyRowBetween = Template.bind({});
JustifyRowBetween.args = {
    children: (
        <>
            <div>Flex</div>
            <div>Flex</div>
            <div>Flex</div>
        </>
    ),
    direction: 'row',
    gap: '32',
    justify: 'between',
};
