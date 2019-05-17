class CssClasses {
    constructor(classes) {
        for (const key in classes) {
            const value = classes[key];
            this[key] = value;
        }
    }

    stringify() {
        let string = "";
        
        for (const key in this) {
            
            const value = this[key];
            
            if (value) {
                string += `${key} `;
            }
        }

        return string;
    }
}

export {
    CssClasses
};