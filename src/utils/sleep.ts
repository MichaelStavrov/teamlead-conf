export const sleep = (ms = 2000) =>
  new Promise((res) => {
    setTimeout(() => {
      res(1);
    }, ms);
  });
