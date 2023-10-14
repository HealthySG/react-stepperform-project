import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: "Calibri, Arial, sans-serif", // Specify Calibri as the font
      },
  palette: {
    primary: {
      main: '#2196F3',
      // fontFamily:'sans' // Blue color
    },
  },
});

export default theme;