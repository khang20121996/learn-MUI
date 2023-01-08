import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

Rightbar.propTypes = {};

function Rightbar(props) {
  return (
    <Box
      bgcolor="lightcoral"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", md: "block" } }}
    >
      Rightbar
    </Box>
  );
}

export default Rightbar;
