const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('jim', '6784', 'earge', 'PMACS');

    expect(intern.school).toBe('PMACS')
})

test('the role should show as intern', () => {
    const intern = new Intern('jim', '6784', 'earge', 'PMACS');

    expect(intern.getRole()).toBe('Intern');
})