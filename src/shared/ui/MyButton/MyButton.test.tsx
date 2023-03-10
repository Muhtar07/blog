import { MyButton, ButtonTheme } from 'shared/ui/MyButton/MyButton';
import { render, screen } from '@testing-library/react';

describe('classNames', () => {
    test('with only first params', () => {
        render(<MyButton>TEST</MyButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Test have class', () => {
        render(<MyButton theme={ButtonTheme.CLEAR}>TEST</MyButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
