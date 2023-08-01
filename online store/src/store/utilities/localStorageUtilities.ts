export const readLocalStorage = (key: string): any => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
        return JSON.parse(storedData);
    } else {
        return [];
    }
}

export const writeLocalStorage = (key: string, value: object | string): void => {
    var dataToStore;
    if (typeof value == "object") {
        dataToStore = JSON.stringify(value)
        localStorage.setItem(key, dataToStore)
    } else {
        localStorage.setItem(key, value)
    }
}