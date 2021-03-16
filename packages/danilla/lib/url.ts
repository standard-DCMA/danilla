interface IQueryObject {
  [key: string]: string;
}

/**
 * extracting the parameters in the url string
 * @param url
 */
export function getQueryObject(url: string): IQueryObject {
  const search = url.substring(url.lastIndexOf('?') + 1);
  const obj: IQueryObject = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    obj[name] = String(decodeURIComponent($2));
    return rs;
  });
  return obj;
}