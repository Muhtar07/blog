import { render, screen } from '@testing-library/react';
import { MyButton, ButtonTheme } from './MyButton';

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
