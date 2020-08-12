import { createMuiTheme } from "@material-ui/core";

const colorBlue = "#b6509e";
const colorPurple = "#2ebac6";

export const themeVars = {
  primary: {
    gradient: `linear-gradient(258deg,${colorBlue},${colorPurple})`,
  },
};

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      paper: "rgb(33, 36, 41)",
    },
  },
  typography: {
    fontFamily: ["Patrick Hand"].join(", "),
  },
  overrides: {
    MuiPaper: {
      root: {
        borderRadius: "30px !important",
        boxShadow: "none !important",
      },
    },
  },
});
