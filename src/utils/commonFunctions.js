export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const delayValue = 1500;
export const delayLoading = () => delay(delayValue);

export const objectToQueryParams = (o = {}) => {
  return Object.entries(o)
    .map((p) => `${encodeURIComponent(p[0])}=${encodeURIComponent(p[1])}`)
    .join("&");
};

export const queryParamsToObject = (s = "?") => {
  const search = s.substring(1);
  if (search.length > 0) {
    return JSON.parse(
      '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
      function (key, value) {
        return key === "" ? value : decodeURIComponent(value);
      }
    );
  }
  return {};
};

export const copyToClipboard = (value) => {
  const el = document.createElement("textarea");
  try {
    el.value = JSON.stringify(value);
  } catch (error) {
    el.value = value;
  }
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};
