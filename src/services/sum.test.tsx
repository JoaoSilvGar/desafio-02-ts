import exp from "constants"
import { multiply, sum } from "./sum"

describe("Sum", () => {
    it("Must add 1 to informed number", () => {
        const value = sum(1)
        expect(value).toBe(2)
    })

    it("Must to multiply the number by 2", () => {
        const value = multiply(2, 2)
        expect(value).toBe(4)
    })

    it("Must to multiply the number by 3", () => {
        const value = multiply(2,3)
        expect(value).toBe(6)
    })

    it("If multiplier is different from 2 or 3, must return an error", () => {
        const value = multiply(2,4)
        expect(value).toBe("Multiplicador não aceito")
    })
})