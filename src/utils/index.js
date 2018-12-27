export const filterArrayBasedOnString = (array, string) => array.filter(a => (
  (a.value && a.value.toLowerCase().indexOf(string && string.toLowerCase()) !== -1)
  || (a.code && a.code.indexOf(string) !== -1)
));

export const existItemInArray = (array, item) => {
  if (array.length === 0) {
    return false;
  }
  return array.map(a => a.id.toLowerCase().indexOf(item.value && item.value.toLowerCase()) !== -1)
    .filter(res => !!res).toString();
};
