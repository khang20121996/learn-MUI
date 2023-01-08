import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home } from "@mui/icons-material";

Sidebar.propTypes = {};

function Sidebar(props) {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", md: "block" } }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
