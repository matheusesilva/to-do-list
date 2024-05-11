export function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

export function saveLocal (type, data) {
    if (storageAvailable("localStorage")) {
        localStorage.setItem(type, JSON.stringify(data));
    }
}

export function getLocal (type) {
    if (storageAvailable("localStorage")) {
        let data = JSON.parse(localStorage.getItem(type));
        if (type === 'tasks' && data !== null) {
            data = data.map(item => ({
                ...item,
                dueDate: new Date(item.dueDate)
            }));
        }
        return data 
    }
}
