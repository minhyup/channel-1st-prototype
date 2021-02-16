// 비동기 테스트용
export const fakeApi = (n: number): Promise<PromiseConstructor> => {
  return new Promise((resolve) => {
    return setTimeout(resolve, n);
  });
};
