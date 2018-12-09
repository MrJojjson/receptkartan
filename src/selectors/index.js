export const getInputValue = (store, id) => (store.inputs && store.inputs[id]) || '';

export const getDropdownValue = (store, id) => (store.dropdowns && store.dropdowns[id].value) || '';
export const isDropdownOpen = (store, id) => (store.dropdowns && store.dropdowns[id].open) || false;
