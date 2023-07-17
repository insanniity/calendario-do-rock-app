import { createTheme } from "@mui/material";
import { ptBR } from '@mui/material/locale';

export const darkTheme = createTheme({
    //dark mode frrom system
    palette: {
        mode: 'dark',
    }
}, ptBR);