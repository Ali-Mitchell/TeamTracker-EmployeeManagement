const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Carla', 'Engineer', 'carla@email.com', 'Ali-Mitchell', '55K');

    expect(engineer.salary).toBe('55K');
})

test('should return as engineer', () => {
    const engineer = new Engineer('Carla', 'Engineer', 'carla@email.com', '55K');

    expect(engineer.getRole()).toBe('Engineer');
})