import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { AddNewCommentForm } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { sendNewComment } from '../../model/services/sendNewComment';
import {
    getAddNewCommentForArticleError,
    getAddNewCommentForArticleIsLoading,
    getAddNewCommentForArticleText,
} from '../../model/selectors/addNewCommentForArticleSelectors/addNewCommentForArticleSelectors';

import {
    addNewCommentForArticleActions,
    addNewCommentForArticleReducer,
} from '../../model/slices/addNewCommentForArticleSlice';

const reducers: ReducersList = {
    addNewCommentForArticle: addNewCommentForArticleReducer,
};

const AddNewCommentForArticle = memo(() => {
    const dispatch = useAppDispatch();

    const error = useSelector(getAddNewCommentForArticleError);
    const isLoading = useSelector(getAddNewCommentForArticleIsLoading);
    const text = useSelector(getAddNewCommentForArticleText);

    const onHandlerInputText = useCallback((value: string) => {
        dispatch(addNewCommentForArticleActions.setText(value));
    }, [dispatch]);

    const onSendComment = useCallback(async () => {
        if (!text) {
            dispatch(addNewCommentForArticleActions.setError('Пустой коментарии'));
            setTimeout(() => {
                dispatch(addNewCommentForArticleActions.setError(''));
            }, 2000);
        } else {
            await dispatch(sendNewComment());
        }
    }, [dispatch, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <AddNewCommentForm
                onHandlerInputText={onHandlerInputText}
                onSendComment={onSendComment}
                isLoading={isLoading}
                error={error}
                text={text}
            />
        </DynamicModuleLoader>

    );
});

export default AddNewCommentForArticle;
