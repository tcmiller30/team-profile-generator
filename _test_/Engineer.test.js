const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    
    describe('Initialization', () => {
        it('should return a new Engineer object if provided proper parameters', () => {
            const engineer = new Engineer('John', 1234, 'john@gmail.com', 'johnGithub')

            expect(engineer.name).toEqual('John');
            expect(engineer.id).toEqual(1234);
            expect(engineer.email).toEqual('john@gmail.com');
            expect(engineer.github).toEqual('johnGithub');
        })
    })

    describe('getGitHub', () => {
        it('should get the given GitHub from the Engineer obj', () => {
            const engineer = new Engineer('John', 1234, 'john@gmail.com', 'johnGithub')

            expect(engineer.getGitHub()).toEqual('johnGithub');
        })
    })

    describe('getRole', () => {
        it('should return the role Engineer', () => {
            const engineer = new Engineer('John', 1234, 'john@gmail.com', 'johnGithub')

            expect(engineer.getRole()).toEqual('Engineer')
        })
    })
})