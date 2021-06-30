const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Ali', 'Intern', 'Ali@email.com', 'UofU');

    expect(intern.school).toBe('UofU')
})

test('the role should show as intern', () => {
    const intern = new Intern('Ali', 'Intern', 'Ali@email.com', 'UofU');

    expect(intern.getRole()).toBe('Intern');
})