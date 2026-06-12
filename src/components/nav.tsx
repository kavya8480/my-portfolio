import * as React from 'react';
import {AppBar,
Toolbar,
Typography,
Button,
IconButton,
Box,Menu,Container,MenuItem} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import Home from './hero';

const pages = ["Home", "About","Education", "Skills", "Projects", "Contact"];


function ResponsiveAppBar() {
const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

 const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
   const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleScroll = (id: string) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
};  

  return (
    <AppBar position="fixed" elevation={0} sx={{bgcolor:"rgba(18,18,18,0.8)",backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            {/* Logo  */}
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 6,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '1px',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            TD<span style={{ color: "#64ffda" }}>.dev</span>

          </Typography>

          {/* mobile menu button  */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
            //   aria-label="account of current user"
            //   aria-controls="menu-appbar"
            //   aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
                           transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
             {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* mobile logo  */}
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Kavya.dev
            {/* desktop menu  */}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,justifyContent: "center",
    gap: 8,
}}>
            {pages.map((page) => (
              <Button
                key={page}
                    onClick={() => handleScroll(page.toLowerCase())}

                sx={{color: 'white', textTransform:"none",fontSize: "0.95rem",fontWeight: 500,"&:hover": {
          color: "#64ffda",
          backgroundColor: "transparent",
        },
 }}
              >
                {page}
              </Button>
            ))}
          </Box>
            {/* resume button  */}
          <Button
            variant="contained"
             component="a"
  href="/tapaswini_das_cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
            sx={{
              borderRadius: "30px",
              textTransform: "none",
              px: 3, py:1, fontWeight:600, background: "linear-gradient(45deg,#64ffda,#00bcd4)",
    color: "#000",
    boxShadow: "0 4px 20px rgba(100,255,218,0.3)",
    "&:hover": {
      transform: "translateY(-2px)",
    },
            }}
          >
            Resume
          </Button>
        
        </Toolbar>
      </Container>
    </AppBar>
   
  );

}
export default ResponsiveAppBar;
