import {ReactNode} from "react";
import {darkTheme} from "assets/theme/dark";
import {lightTheme} from "assets/theme/light";
import {ThemeProvider} from "@mui/material";
import {useAppSelector, useConfig} from "hooks";


type Props = {
    children: ReactNode;
}

const Theme = ({children}: Props) => {
    const {theme} = useAppSelector(useConfig);

    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme }>
            {children}
        </ThemeProvider>
    )
}

export default Theme;