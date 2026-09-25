import { useState, useEffect } from "react";

type theme = 'dark' | 'light';

export function useTheme() {
    const [theme, setTheme] = useState<theme>(() => {
        const savedTheme = localStorage.getItem("theme");

        if(savedTheme === 'dark' || savedTheme === 'light'){
            return savedTheme;
        }

        return 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem('theme', theme);
    },[theme])

    const toggleTheme = () => {
        setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light');
    }

    return {
        theme, 
        toggleTheme
    }
}