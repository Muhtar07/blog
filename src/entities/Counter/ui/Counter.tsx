import { MyButton } from 'shared/ui/MyButton/MyButton';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();

    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1
                data-testid="value-tittle"
            >
                { counterValue }
            </h1>
            <MyButton
                onClick={increment}
                data-testid="increment-btn"
            >
                {t('Прибавить')}
            </MyButton>
            <MyButton
                onClick={decrement}
                data-testid="decrement-btn"
            >
                {t('Отнять')}
            </MyButton>
        </div>
    );
};
