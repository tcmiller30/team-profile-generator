const Employee = require('../lib/employee');

describe('Employee', () => {

    describe('Initialization', () => {
        it('should create a new Employee object if provided proper parameters', () => {
            const employee = new Employee('John', 1234, 'John@gmail.com');

            expect(employee.name).toEqual('John');
            expect(employee.id).toEqual(1234);
            expect(employee.email).toEqual('John@gmail.com')
        })
    })

    describe('getName', () => {
        it('should return the listed name of the given employee', () => {
            const employee = new Employee('John', 1234, 'John@gmail.com');

            expect(employee.name).toEqual('John');
        })
    })

    describe('getId', () => {
        it('should return the listed name of the given employee', () => {
            const employee = new Employee('John', 1234, 'John@gmail.com');

            expect(employee.id).toEqual(1234);
        })
    })

    describe('getEmail', () => {
        it('should return the listed name of the given employee', () => {
            const employee = new Employee('John', 1234, 'John@gmail.com');

            expect(employee.email).toEqual('John@gmail.com');
        })
    })

    describe('getRole', () => {
        it('should return the role Employee', () => {
            const employee = new Employee('John', 1234, 'John@gmail.com');

            expect(employee.getRole()).toEqual('Employee');
        })
    })
});