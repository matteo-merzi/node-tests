const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two number', () => {
            var res = utils.add(33, 14);

            expect(res).toBeA('number').toBe(47);
        });

        it('should async add two number', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBeA('number').toBe(7);
                done();
            });
        });
    });

    describe('#square', () => {
        it('should square a number', () => {
            var res = utils.square(3);

            expect(res).toBeA('number').toBe(9);
        });

        it('should async square a number', (done) => {
            utils.asyncSquare(3, (res) => {
                expect(res).toBeA('number').toBe(9);
                done();
            });
        });
    });

    it('should expect some values', () => {
        expect(12).toNotBe(11);
        expect({
            name: 'Matteo'
        }).toEqual({
            name: 'Matteo'
        });
        expect({
            name: 'Matteo'
        }).toNotEqual({
            name: 'matteo'
        });
        expect([1, 2, 3]).toInclude(2);
        expect([1, 2, 3]).toExclude(4);
        expect({
            name: 'Matteo',
            age: 31,
            location: 'Verona'
        }).toInclude({
            age: 31
        });
    });

    it('should set firstName and lastName', () => {
        var user = {
            age: 31,
            location: 'Verona'
        };
        var res = utils.setName(user, 'Matteo Merzi');
        expect(res).toInclude({
            firstName: 'Matteo',
            lastName: 'Merzi'
        });
    });

});