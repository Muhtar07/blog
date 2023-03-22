import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';

export const SuspenseDecorator = (StoryDecorator: Story) => (
    <Suspense fallback={<Loader />}>
        <StoryDecorator />
    </Suspense>
);
