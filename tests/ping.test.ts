// @ts-ignore
test("Test ping endpoint", async () => {
  let rawResult = await fetch("http://localhost:9434/ping");
  let result = await rawResult.json();
  expect(result?.data?.success).toBe(true);
});
