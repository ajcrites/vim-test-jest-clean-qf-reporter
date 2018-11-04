test('this will throw', () => {
  throw new Error()
})
test('this will fail', () => {
  expect(false).toBeTruthy()
})