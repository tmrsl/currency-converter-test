export const http = (baseUrl, params) => {
  const reqUrl =
    baseUrl +
    new URLSearchParams({
      ...params,
    });

  return fetch(reqUrl).then((response) => response.json());
};

export const hasOwn = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};
