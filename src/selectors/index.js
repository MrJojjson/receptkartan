export const getInputValue = (store, page, id) => (
  store[page] && store[page][id]
) || '';

export const getList = (store, page, id) => (
  store[page] && store[page][id] && store[page][id].list
) || [];

export const getDropdownItem = (store, page, id) => (
  store && store[page] && store[page][id] && store[page][id]
) || [];

export const getDropdownValue = (store, page, id) => (
  store && store[page] && store[page][id] && store[page][id].value
) || '';

export const getDropdownTypingWord = (store, page, id) => (
  store && store[page] && store[page][id] && store[page][id].typingWord
) || '';

export const getDropdownTypingWordIndex = (store, page, id) => (
  store && store[page] && store[page][id] && store[page][id].typingWordIndex
) || 0;

export const getDropdownSplitValue = (store, page, id) => (
  store[page] && store[page][id] && store[page][id].splitValue
) || [];

export const isDropdownOpen = (store, page, id) => (
  store && store[page] && store[page][id] && store[page][id].open
) || false;

export const getMapZoom = store => (
  store.map && store.map.zoom
) || 1;

export const getMapCenter = store => (
  store.map && store.map.center
) || [0, 20];

export const getMapSearchCountries = (store, page, id) => (
  store[page] && store[page][id] && store[page][id].list
) || [];
