import { User } from 'entities/User';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt'
}

export enum ArticleBlockType {
    TEXT='TEXT',
    CODE='CODE',
    IMAGE='IMAGE',
}

export interface ArticleBlockBase {
    id:string;
    type: ArticleBlockType;
}

export interface ArticleBlockCode extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleBlockImage extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    title: string;
    src: string;
}

export interface ArticleBlockText extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];

}
export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    ECONOMICS = 'ECONOMICS',
    SCIENCE = 'SCIENCE',

}

export type ArticleBlock = ArticleBlockText | ArticleBlockImage | ArticleBlockCode

export interface Article {
    id: string;
    user: User;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}

export enum ArticleView {
    BIG = 'big',
    SMALL = 'small',
}
