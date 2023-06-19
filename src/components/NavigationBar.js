import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useApp } from "../context/AppProvider";

export const NavigationBar = () => {
  const { isLoggedIn, setIsLoggedIn, cart } = useApp();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/");
                }}
              >
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/login");
                }}
              >
                <Typography textAlign="center">Login</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
              {isLoggedIn && (
                <Button
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/dashboard");
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Dashboard
                </Button>
              )}
            </Box>
            {!isLoggedIn ? (
              <Button
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/login");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Login
              </Button>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={() => {
                    handleCloseNavMenu();
                    setIsLoggedIn(false);
                    navigate("/login");
                  }}
                  sx={{ m: 2, color: "white", display: "block" }}
                >
                  Logout
                </Button>
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCartIcon color="inherit" />
                </Badge>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
