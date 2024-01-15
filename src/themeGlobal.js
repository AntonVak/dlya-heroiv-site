import { createTheme } from "@mui/material";
import { tektur } from '@fontsource/tektur';
import { unbounded } from '@fontsource/unbounded';



const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1440,
      },
    },
    palette: {
      text: {
        primary: '#171717',
        white: '#FFFFFF',  
        yellow: '#FCB813',
        grey: '#B1B1B1'  
      },
      background: {
        headerRow: '#BEB7A4',
      },
     
    },
    status: {
      warning: '#FF1B1C',
    },
    typography: {
      fontSize: 14,
        lineHeight: 400,
        fontFamily: [
          // 'Unbounded sans-serif',
          'Tektur sans-serif'
          
        ].join(','),
        
        
        
        
      },
      body: {
        lineHeight: 0,
      },
     
  })

  export default theme;
  