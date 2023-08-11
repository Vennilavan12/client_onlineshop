import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cartTotalQuantity}=useSelector(state=>state.cart)
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">
            OnlineShop
          </Link>
        
          <IconButton aria-label="cart">
            <Badge badgeContent={cartTotalQuantity} color="success">
              <ShoppingCartIcon color="action" />
            </Badge>
          </IconButton>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
