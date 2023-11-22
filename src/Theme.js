import { createTheme } from "@mui/material/styles";
import { orange, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main:orange[500]
    },
    secondary:{
      main:red[400]
    }
  },

  breakpoints: {
    values:{
      xs:0,
      sm:650,
      md:950,
      lg:1250,
      xl:1500
    }
  }
});

