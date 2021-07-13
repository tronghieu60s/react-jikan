export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const delayValue = 2000;
export const delayLoading = () => delay(delayValue);
