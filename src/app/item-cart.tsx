import { Card, CardContent, CardMedia, Typography, Button, Stack } from "@mui/material";
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
    <Card sx={{ display: 'flex', mb: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt={itemname}
      />
      <Stack direction="row" spacing={2} sx={{ flexGrow: 1, alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
        <CardContent>
          <Typography component="div" variant="h5">
            {itemname}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {itemPrice.toLocaleString()} THB
          </Typography>
          <Typography variant="body1" color="text.primary" component="div">
            Quantity: {quantity}
          </Typography>
        </CardContent>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" color="primary" onClick={incrementQuantity}>
            +
          </Button>
          <Button variant="contained" color="secondary" onClick={decrementQuantity}>
            -
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ItemCart;