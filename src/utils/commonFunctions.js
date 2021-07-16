export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const delayValue = 1500;
export const delayLoading = () => delay(delayValue);
