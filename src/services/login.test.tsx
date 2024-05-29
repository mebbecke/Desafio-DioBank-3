import { login } from "./login";

describe('login', () => {
    const mockEmail = 'ma@dio.bank';
    const mockPassword = '123456';

    it('Deve exibir um alert com boas vindas caso o email e a senha sejam válidos', async() => {
        const response = await login(mockEmail, mockPassword);
        expect(response).toBeTruthy();
    })

    it('Deve exibir um erro caso o email ou a senha sejam inválidos', async() => {
        const response = await login('email@inválido.com', 'senhainvalida');
        expect(response).toBeFalsy();
    })
})