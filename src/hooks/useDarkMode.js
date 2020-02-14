import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [darkModeOn, setDarkModeOn] = useLocalStorage(initialValue);
    // debugger
    useEffect(() => {
darkModeOn
? document.body.classList.add("dark-mode")
: document.body.classList.remove("dark-mode")

    }, [darkModeOn])
    return [darkModeOn, setDarkModeOn]
}

//     const toggleDarkMode = e => {
//         e.preventDefault();

//         return setDarkModeOn ? setDarkModeOn(false) : setDarkModeOn(true);
//     };

//     useEffect(() => {
//         if (darkModeOn === true) {
//             document.body.classList.add("dark-mode");
//         } else {
//             document.body.classList.remove("dark-mode");
//         }
//     }, [darkModeOn]);

//   return [darkModeOn, setDarkModeOn];
// };

// export default useDarkMode;