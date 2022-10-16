export const isRealObj = (obj) => {
  return obj && obj !== "null" && obj !== "undefined";
};

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const onLoad = (fileString) => {
  updateUserInfo("figure", fileString);
};

export const getBase64 = (file, onloadFunc) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    onloadFunc(reader.result);
  };
};
