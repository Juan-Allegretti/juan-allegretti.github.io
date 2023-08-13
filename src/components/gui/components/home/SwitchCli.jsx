import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Tooltip } from "@mui/material";

import cliImage from '../../../../img/terminal.png'; // Ruta a tu imagen de CLI

export default function SwitchCli() {
  const navigate = useNavigate();

  const redirectToCli = () => {
    navigate('/cli');
  };

  return (
    <Box >
      <Tooltip title="Go to CLI (Command Line Interface)">
        <img
          src={cliImage}
          alt="Go to CLI (Command Line Interface)"
          onClick={redirectToCli}
          style={{ width: '30px', height: '30px', cursor: 'pointer' }}
        />
      </Tooltip>
    </Box>
  );
}
