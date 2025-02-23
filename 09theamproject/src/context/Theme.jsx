import {useContext, createContext} from "react";

export const ThemeContext = createContext(
    {
        themeMode: "light",
        darkTheme: () => {},
        lightTheme: () => {}
    }
)

export const ThemeProvider = ({ children, value }) => (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
);

export default function useTheme() {
    return(
        useContext(ThemeContext)
    )
}