const { test, expect } = require('@jest/globals');
const { stringContaining } = require('expect');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave', 'Manager', 'dave@io.com');

    expect(employee.name).toBe('Dave');
    expect(employee.jobTitle).toBe('Manager');
    expect(employee.email).toBe('dave@io.com');
});

test('gets employees name', () => {
    const employee = new Employee('Dave', 'Manager', 'dave@io.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('gets employees id', () => {
    const employee = new Employee('Dave', 'Manager', 'dave@io.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.jobTitle));
});

test('gets employees email', () => {
    const employee = new Employee('Dave', 'Manager', 'dave@io.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test('gets role(intern or employee)', () => {
    const employee = new Employee('Dave', 'Employee', 'dave@io.com');

    expect(employee.getRole()).toBe('Employee');
});