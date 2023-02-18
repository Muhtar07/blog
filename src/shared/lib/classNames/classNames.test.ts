import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first params', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional params', () => {
        const classResult = 'someClass hello clear';
        expect(classNames('someClass', {}, ['hello', 'clear']))
            .toBe(classResult);
    });
    test('with mods all true', () => {
        const classResult = 'someClass hello clear hovered active';
        expect(classNames('someClass', {
            hovered: true, active: true,
        }, ['hello', 'clear']))
            .toBe(classResult);
    });
    test('with mods undefined', () => {
        const classResult = 'someClass hello clear hovered';
        expect(classNames('someClass', {
            hovered: true, active: undefined,
        }, [
            'hello', 'clear',
        ]))
            .toBe(classResult);
    });
    test('with mods false', () => {
        const classResult = 'someClass hello clear hovered';
        expect(classNames('someClass', {
            hovered: true, active: false,
        }, [
            'hello', 'clear',
        ]))
            .toBe(classResult);
    });
});
