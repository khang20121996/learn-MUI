import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

Feed.propTypes = {};

function Feed(props) {
  return (
    <Box flex={4}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}

export default Feed;
