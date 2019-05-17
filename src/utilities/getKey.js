import {
    isObjectEmpty
}
from "./isObjectEmpty";

export const getKey = (object, keys) => {
    if (!isObjectEmpty(object)) {
        for (let key of keys) {
        
            object = object[key];
            
            if (object[key]) {
                return null;
            }
        }
        

        return object;
    }

    else {
        return null;
    }
};