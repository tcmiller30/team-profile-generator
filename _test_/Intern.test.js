const Intern = require('../lib/intern');

describe('Intern', () => {
    
    describe('Initialization', () => {
        it('should return a new Intern object if provided proper parameters', () => {
            const intern = new Intern('Bob', 1234, 'bob@gmail.com', 'UCI')

            expect(intern.name).toEqual('Bob');
            expect(intern.id).toEqual(1234);
            expect(intern.email).toEqual('bob@gmail.com');
            expect(intern.school).toEqual('UCI');
        })
    })

    describe('getSchool', () => {
        it('should get the attended school of the Intern obj', () => {
            const intern = new Intern('Bob', 1234, 'bob@gmail.com', 'UCI')

            expect(intern.getSchool()).toEqual('UCI');
        })
    })

    describe('getRole', () => {
        it('should return the role Intern', () => {
            const intern = new Intern('Bob', 1234, 'bob@gmail.com', 'UCI')

            expect(intern.getRole()).toEqual('Intern')
        })
    })
})