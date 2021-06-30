const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('sharni', '4567', 'rethwrth', 'sharni595');

    expect(engineer.github).toBe('sharni595');
})

test('should return as engineer', () => {
    const engineer = new Engineer('sharni', '4567', 'rethwrth', 'sharni595');

    expect(engineer.getRole()).toBe('Engineer');
})