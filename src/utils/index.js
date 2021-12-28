export const http = (baseUrl, params) => {
  const reqUrl =
    baseUrl +
    new URLSearchParams({
      ...params,
    });

  return fetch(reqUrl).then((response) => response.json());
};
