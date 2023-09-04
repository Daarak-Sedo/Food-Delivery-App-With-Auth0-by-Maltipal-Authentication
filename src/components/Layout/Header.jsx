import React, { useState, useEffect } from "react";
import {
  Box,
  ListItem,
  ListItemText,
  AppBar,
  Divider,
  Toolbar,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  Typography,
  Tooltip,
  Badge,
} from "@mui/material";
import Logo from "../../images/icons8-nutanix-48.png";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const Header = () => {
  const products = useSelector((state) => state.cart);

  let cartQuantity = () => {
    return products.items.length;
  };

  useEffect(() => {
    cartQuantity();

    // Do something with the cart quantity, such as updating state or rendering
  }, [products]);

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [userModal, setUserModal] = useState(null);
  const handleOpenUserMenu = (event) => {
    setUserModal(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setUserModal(null);
  };

  const user_name = localStorage.getItem("user_name");
  const user_profile = localStorage.getItem("user_profile");
  const user_name_1st_letter = user_name?.charAt(0);

  const Pages = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Contact", to: "/contact" },
  ];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  //---------- Common Nav Link Page For All Devices ---------
  const renderNavItems = () => {
    // Function to render UI
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" }, // Adjusted flexDirection values
        }}
      >
        {Pages.map((item, index) => (
          <ListItem
            key={index}
            component={NavLink}
            to={item.to}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </Box>
    );
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          mb: 4,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <img src={Logo} alt="logo" />
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {renderNavItems()}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <NavLink to="/cart">
              <IconButton aria-label="cart" sx={{ marginRight: "20px" }}>
                <Badge badgeContent={cartQuantity()} color="primary">
                  <ShoppingCartIcon sx={{ color: "#00b0ff" }} />
                </Badge>
              </IconButton>
            </NavLink>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user_profile ? (
                  <Avatar sx={{ backgroundColor: "#00b0ff" }}>
                    <img src={user_profile} alt="User Avatar" />
                  </Avatar>
                ) : (
                  <Avatar sx={{ backgroundColor: "#00b0ff" }}>
                    {user_name_1st_letter}
                  </Avatar>
                )}
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={userModal}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(userModal)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/*----------- Drawer/Modal For Sidebar (Sm Devices)---------------  */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "240px",
          },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <img src={Logo} alt="logo" height="50px" width="50px" />
          <Divider />
          {renderNavItems()}
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
