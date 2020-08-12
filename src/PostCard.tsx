import React from "react";
import { Box, Paper, makeStyles, Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    marginLeft: "auto",
    width: "95%",
  },
  avatar: {
    width: 80,
    height: 80,
    position: "absolute",
    top: 0,
    borderRadius: 30,
  },
});

interface PostCardProps {}

export const PostCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Box position="relative" pt={2}>
      <Avatar color="primary" variant="rounded" className={classes.avatar}>
        CH
      </Avatar>
      <Paper className={classes.paper}>
        <Box height={200}></Box>
      </Paper>
    </Box>
  );
};
