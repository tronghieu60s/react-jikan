export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const delayValue = 1500;
export const delayLoading = () => delay(delayValue);

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