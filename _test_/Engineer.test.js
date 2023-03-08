const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    
    describe('Initialization', () => {
        it('should return a new Engineer object if provided proper parameters', () => {
            const engineer = new Engineer('Bob', 1234, 'bob@gmail.com', 'bobGithub')

            expect(engineer.name).toEqual('Bob');
            expect(engineer.id).toEqual(1234);
            expect(engineer.email).toEqual('bob@gmail.com');
            expect(engineer.github).toEqual('bobGithub');
        })
    })

    describe('getGitHub', () => {
        it('should get the given GitHub from the Engineer obj', () => {
            const engineer = new Engineer('Bob', 1234, 'bob@gmail.com', 'bobGithub')

            expect(engineer.getGitHub()).toEqual('bobGithub');
        })
    })

    describe('getRole', () => {
        it('should return the role Engineer', () => {
            const engineer = new Engineer('Bob', 1234, 'bob@gmail.com', 'bobGithub')

            expect(engineer.getRole()).toEqual('Engineer')
        })
    })
})