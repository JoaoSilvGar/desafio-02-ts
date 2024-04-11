import { login } from "./login"

describe("Login", () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    it("Must show a welcome alert", () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith("Bem vindo")
    })
})