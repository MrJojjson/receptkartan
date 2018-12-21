export const filterArrayBasedOnString = (array, string) => array.filter(a => (
  a.value && a.value.toLowerCase().indexOf(string && string.toLowerCase()) !== -1
));

export const existItemInArray = (array, item) => array.indexOf(item) !== -1;
