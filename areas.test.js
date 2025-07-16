const formulas = require('./areas');

test('Area de cuadrado de 2', () => {
    expect(formulas(2)).toBe(4);
});