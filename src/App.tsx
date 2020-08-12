import { Box, CssBaseline, makeStyles, ThemeProvider } from "@material-ui/core";
import React from "react";
import "./App.css";
import ghostLogo from "./ghost3.png";
import { PostCard } from "./PostCard";
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
  logo: {},
});

const posts = [{}, {}, {}, {}];

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
        overflow="hidden"
        position="relative"
      >
        <Box flex={1} pt={2} overflow="auto">
          <Box
            maxWidth={400}
            mx="auto"
            className={classes.content}
            px={2}
            pb={20}
          >
            {posts.map((p, index) => (
              <>
                <PostCard />
                {index !== posts.length - 1 && <Box height={32} />}
              </>
            ))}
          </Box>
        </Box>

        <Box
          textAlign="center"
          pt={4}
          position="absolute"
          width="100%"
          bottom={0}
          px={4}
          py={3}
        >
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
