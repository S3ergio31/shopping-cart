import { useState } from "react";

export default function useLocalStorage(key){
    const [value, setValue] = useState(localStorage.getItem(key));

    const save = (value) => {
        localStorage.setItem(key, value);
        setValue(value);
    }

    const remove = () => localStorage.removeItem(key);

    return {
        value,
        save,
        remove
    }

}