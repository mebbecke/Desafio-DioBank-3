import { login } from "./login";

describe('login', () => {
    const mockEmail = 'ma@dio.bank'

    it('Deve exibir um alert com boas vindas caso o email seja válido', async() => {
        const response = await login(mockEmail)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await login('email@inválido.com')
        expect(response).toBeFalsy()
    })
})