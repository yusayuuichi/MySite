export const isRealObj = (obj) => {
  return obj && obj !== "null" && obj !== "undefined";
};

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
