import React from 'react';
import { Box, Tooltip } from "@mui/material";

export default function Toggler({ darkMode, handleClick }) {
  const transition = 'all 250ms ease';

  return (
    <Box fontSize={'1.5rem'} sx={{ cursor: 'pointer', ":hover": { transform: 'translateY(-3px)', transition: transition } }}>
      {
        darkMode ?
          <Tooltip title="Toggle light/dark mode">
            <span onClick={handleClick} aria-label="Full Moon" role="img">☀️</span>
          </Tooltip>
          :
          <Tooltip title="Toggle light/dark mode">
            <span onClick={handleClick} aria-label="New Moon" role="img">🌙</span>
          </Tooltip>
      }
    </Box>
  );
}
