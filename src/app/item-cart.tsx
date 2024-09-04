import { Card, CardContent, CardMedia, IconButton, Stack, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useState } from "react";

interface ItemCartProps {
  itemname: string;
  itemPrice: number;
  image: string;
  handleIncremantal: (itemPrice: number) => void;
  handleDecremental: (itemPrice: number) => void;
}

const ItemCart: React.FC<ItemCartProps> = ({ itemname, itemPrice, image, handleIncremantal, handleDecremental }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    handleIncremantal(itemPrice);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      handleDecremental(itemPrice);
    }
  };

  return (
    <Card className="item-cart-card">
      <CardMedia
        component="img"
        className="item-cart-media"
        image={image}
        alt={itemname}
      />
      <Box className="item-cart-box">
        <CardContent className="item-cart-content">
          <Typography variant="h6" component="div" className="item-cart-name">
            {itemname}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" className="item-cart-price">
            {itemPrice.toLocaleString()} THB
          </Typography>
        </CardContent>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton
            size="small"
            color="secondary"
            onClick={decrementQuantity}
            disabled={quantity === 0}
            aria-label={`Decrease quantity of ${itemname}`}
            className="item-cart-buttons"
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
          <Typography variant="body2" className="item-cart-quantity">
            {quantity}
          </Typography>
          <IconButton
            size="small"
            color="primary"
            onClick={incrementQuantity}
            aria-label={`Increase quantity of ${itemname}`}
            className="item-cart-buttons"
          >
            <AddIcon fontSize="small" />
          </IconButton>
          <Typography variant="body2" className="item-cart-total">
            {(quantity * itemPrice).toLocaleString()} THB
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
};

export default ItemCart;
