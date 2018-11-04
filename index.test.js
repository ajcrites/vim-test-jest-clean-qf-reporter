test('this will throw', () => {
  throw new Error()
})

describe('some describe title', () => {
  test("this will fail", () => {
    expect(false).toBeTruthy()
  })
})