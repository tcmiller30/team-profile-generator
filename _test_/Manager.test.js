const Manager = require('../lib/manager');

describe('Manager', () => {
    
    describe('Initialization', () => {
        it('should return a new Manager object if provided proper parameters', () => {
            const manager = new Manager('John', 1234, 'john@gmail.com', '21b')

            expect(manager.name).toEqual('John');
            expect(manager.id).toEqual(1234);
            expect(manager.email).toEqual('john@gmail.com');
            expect(manager.officeNum).toEqual('21b');
        })
    })

    describe('getOfficeNum', () => {
        it('should get the given office number from the Manager obj', () => {
            const manager = new Manager('John', 1234, 'john@gmail.com', '21b')

            expect(manager.getOfficeNum()).toEqual('21b');
        })
    })

    describe('getRole', () => {
        it('should return the role Manager', () => {
            const manager = new Manager('John', 1234, 'john@gmail.com', '21b')

            expect(manager.getRole()).toEqual('Manager')
        })
    })
})