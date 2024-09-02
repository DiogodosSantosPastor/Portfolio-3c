const { adicionar, subtrair, multiplicar, dividir } = require('./funcoes.js');

test('adicionar 5 + 3 deve ser 8', () => {
    expect(adicionar(5, 3)).toBe(8);
});

test('subtrair 5 - 3 deve ser 2', () => {
    expect(subtrair(5, 3)).toBe(2);
});

test('multiplicar 5 * 3 deve ser 15', () => {
    expect(multiplicar(5, 3)).toBe(15);
});

test('dividir 6 / 3 deve ser 2', () => {
    expect(dividir(6, 3)).toBe(2);
});

test('dividir por 0 deve retornar mensagem de erro', () => {
    expect(dividir(5, 0)).toBe("Erro: Divisão por zero não é permitida.");
});