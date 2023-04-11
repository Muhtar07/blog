import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { To } from 'history';
import { NavigateOptions } from 'react-router';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { AddNewCommentForArticleSchema } from 'features/AddNewCommentForArticle';
import { ArticlesPageSchema } from 'pages/ArticlesPage/model/types/articlesPageTypes';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // Асинхроные редюсеры

    articleDetails?: ArticleDetailsSchema;
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetailsComment?: ArticleDetailsCommentsSchema;
    addNewCommentForArticle?: AddNewCommentForArticleSchema;
    articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key:StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void,

}

export interface ThunkConfig<T>{
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
