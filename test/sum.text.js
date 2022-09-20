const { text } = require("express")
const subtract = require("./sum")

text("accurately add two number", () => {
    expect(sum(67, 43)

    ).toBe(110)
})