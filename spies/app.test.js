const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    });

    it('should call the spy with parameters', () => {
        var spy = expect.createSpy();
        spy('Matteo', 31);
        expect(spy).toHaveBeenCalled('Matteo', 31);
    });

    it('should call saveUser with user object', () => {
       var email = 'test@test.com';
       var password = '123abc';

       app.handleSignUp(email, password);
       expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});