import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryDecorator: Story) => (
    <div className={`app ${theme}`}>
        <StoryDecorator />
    </div>
);
