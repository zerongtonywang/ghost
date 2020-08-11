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
  },
  typography: {
    fontFamily: ["Bad Script"].join(", "),
  },
});
