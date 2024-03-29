import { Article, ArticleSortField, ArticleView } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesPageData } from './fetchArticlesInfiniteListData';

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'TestImg',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT, ArticleType.SCIENCE, ArticleType.ECONOMICS],
    user: {
        id: '1',
        username: 'test',
        avatar: 'AvatarUser',
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '3',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.IMAGE,
            src: 'TestImg',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '5',
            type: ArticleBlockType.CODE,
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '6',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '7',
            type: ArticleBlockType.IMAGE,
            src: 'TestImg',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '8',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [

                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
    ],
};
const articles = Array(3).fill(0).map((_, index) => {
    article.id = `${article.id + index}`;
    return article;
});

describe('fetchArticlesPageData', () => {
    test('success get Articles', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesPageData, {
            articleInfiniteList: {
                page: 1,
                hasMore: true,
                limit: 9,
                ids: [],
                entities: {},
                sort: ArticleSortField.CREATED,
                order: 'asc',
                search: '',
                view: ArticleView.BIG,
                _inited: false,
                type: ArticleType.ALL,

            },
        });
        thunk.api.get.mockReturnValue(Promise.resolve({ data: articles }));

        const result = await thunk.callThunk({ replace: false });

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(articles);
    });
    test('error get Articles', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesPageData, {
            articleInfiniteList: {
                page: 1,
                hasMore: true,
                limit: 9,
                ids: [],
                entities: {},
                sort: ArticleSortField.CREATED,
                order: 'asc',
                search: '',
                view: ArticleView.BIG,
                _inited: false,
                type: ArticleType.ALL,
            },
        });
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ replace: false });

        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.payload).toBe('SERVER ERROR');
    });
});
