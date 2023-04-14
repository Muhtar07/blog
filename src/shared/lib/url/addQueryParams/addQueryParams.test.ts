import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({ search: 'java' });
        expect(params).toEqual('?search=java');
    });
    test('test with no param', () => {
        const params = getQueryParams({ search: undefined });
        expect(params).toEqual('?');
    });
    test('test with one param', () => {
        const params = getQueryParams({ search: 'java', test: 'value' });
        expect(params).toEqual('?search=java&test=value');
    });
});
