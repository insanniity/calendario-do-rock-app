import { createTheme } from "@mui/material";
import { ptBR } from '@mui/material/locale';

export const lightTheme = createTheme({
    //dark mode frrom system
    palette: {
        mode: 'light',
    }
}, ptBR);