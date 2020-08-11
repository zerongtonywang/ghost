import {
  Box,
  CssBaseline,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./App.css";
import ghostLogo from "./ghost3.png";
import { theme } from "./theme";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(44, 47, 54)",
    backgroundImage:
      "radial-gradient(50% 50% at 50% 50%, rgba(33, 114, 229, 0.1) 0%, rgba(33, 36, 41, 0) 100%)",
    backgroundPosition: `0 ${0.45 * window.innerHeight}px`,
    backgroundRepeat: "no-repeat",
  },
  content: {},
  // "@keyframes shadowInOut": {
  //   "0%": {
  //     filter: "drop-shadow(0.5px 0.5px 0.5px #ffffff)",
  //   },
  //   to: {
  //     filter: "drop-shadow(2px 2px 2px #ffffff)",
  //   },
  // },
  logo: {},
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        className={classes.root}
        height={window.innerHeight}
        display="flex"
        flexDirection="column"
      >
        <Box p={1} pt={2}>
          <Typography variant="h1">Ghost</Typography>
        </Box>
        <Box flex={1} p={2}>
          <Box
            maxWidth={400}
            mx="auto"
            height="100%"
            className={classes.content}
          ></Box>
        </Box>
        <Box textAlign="center" pt={4}>
          <img
            src={ghostLogo}
            alt="ghost-logo"
            width={80}
            className={classes.logo}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
