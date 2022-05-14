export const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = args.join('-');
    return cache[key] || (cache[key] = fn(...args));
  };
};

export const debounce = (fn, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
};

export const throttle = (fn, wait) => {};
