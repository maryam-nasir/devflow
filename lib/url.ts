import qs from "query-string";

type UrlQueryParams = {
  params: string;
  key: string;
  value: string;
};

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const queryObject = qs.parse(params);

  queryObject[key] = value;

  return qs.stringifyUrl({ url: window.location.pathname, query: queryObject });
};

type RemoveKeysUrlParams = {
  params: string;
  keys: string[];
};

export const removeKeysFromUrlQuery = ({
  params,
  keys,
}: RemoveKeysUrlParams) => {
  const queryObject = qs.parse(params);

  keys.forEach((key) => {
    delete queryObject[key];
  });

  return qs.stringifyUrl(
    { url: window.location.pathname, query: queryObject },
    { skipNull: true }
  );
};
