const delay = (fn: (...args: unknown[]) => unknown, time: number) => {
  return function (...args: unknown[]) {
    setTimeout(() => {
      fn.apply(args);
    }, time);
  };
};

export { delay };
