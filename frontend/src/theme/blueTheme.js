import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const blueTheme = createTheme({
    palette: {
        primary: {
            main: '#010A7E',
        },
        secondary: {
            main: '#0068D4',
        },
        error: {
            main: red.A400,
        },
    },
});