export const getInputValue = (store, id) => (store.inputs && store.inputs[id]) || '';

export const getDropdownValue = (store, id) => (store.dropdowns && store.dropdowns[id].value) || '';
export const isDropdownOpen = (store, id) => (store.dropdowns && store.dropdowns[id].open) || false;

export const getMapZoom = store => (store.map && store.map.zoom) || 1;
export const getMapCenter = store => (store.map && store.map.center) || [0, 20];
export const getMapSearchCountries = (store, id) => (store.lists && store.lists[id]) || [];
