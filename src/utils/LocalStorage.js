const setItems = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
const getItems = key => JSON.parse(localStorage.getItem(key));
const isExist = value => (value ? value : []);
export { setItems, getItems, isExist };
