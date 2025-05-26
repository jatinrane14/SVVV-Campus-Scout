// import { Sun, Moon } from 'lucide-react';
// import { useState, useEffect } from 'react';

// function ThemeToggle() {
//     const { theme, setTheme } = useState(() => {
//         return localStorage.getItem("theme") || "light";
//     });

//     useEffect(() => {
//         document.body.setAttribute("data-theme", theme);
//         localStorage.setItem("theme", theme);
//     }, [theme]);
//     // const setDarkMode = () =>{
//     //     document.querySelector("body").setAttribute("data-theme","dark");
//     //     localStorage.setItem("theme","dark")
//     //     setTheme("dark");
//     // }
//     // const setLightMode = () =>{
//     //     document.querySelector("body").setAttribute("data-theme","light")
//     //     localStorage.setItem("theme","light")
//     //     setTheme("light");
//     // }
//     const toggleTheme = () => {
//         setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//     };
//     return (<>
//         <button onClick={toggleTheme}>
//             {(theme == "light") ? <Sun></Sun> : <Moon></Moon>}
//         </button>
//     </>)
// }
// export default ThemeToggle;

import './ThemeToggle.css'
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button className='themeButtom' onClick={toggleTheme}>
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
}
export default ThemeToggle;
