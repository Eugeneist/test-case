import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const pages = ['Main', 'News', 'About us'];




const Header = () => {
  
    return (
      <AppBar position="fixed" sx={{backgroundColor: "#2b2d42"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{display: "flex", justifyContent: "space-between"}}>
            <NewspaperIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              News 24
            </Typography>
  
            <Box sx={{ flexGrow: 1, display:"flex", justifyContent: "end" }}>
                {pages.map((page) => (
                  <MenuItem key={page} sx={{"&:hover": {
                    color: "#edf2f4",
                    opacity: [0.9, 0.8, 0.7],
                  },}}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
}

export default Header;