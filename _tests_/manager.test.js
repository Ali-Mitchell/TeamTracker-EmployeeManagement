const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Alan', 'Manager', 'wurghowr', '60K');

    expect(manager.salary).toBe('60K');
})

test('should return as manager', () => {
    const manager = new Manager('Alan', 'Manager', 'wurghowr', '60K');

    expect(manager.getRole()).toBe('Manager');
})