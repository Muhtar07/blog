import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (StoryDecorator: Story) => (
    <BrowserRouter>
        <StoryDecorator />
    </BrowserRouter>
);
