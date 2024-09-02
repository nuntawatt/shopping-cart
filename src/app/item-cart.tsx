import { Card, CardContent, CardMedia, IconButton, Stack, Typography } from "@mui/material";
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
    <Card sx={{ display: 'flex', mb: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151, borderRadius: '4px 0 0 4px', objectFit: 'cover' }}
        image={image}
        alt={itemname}
      />
      <Stack direction="row" spacing={2} sx={{ flexGrow: 1, alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
        <CardContent sx={{ flex: '1' }}>
          <Typography variant="h6" component="div" sx={{ mb: 1 }}>
            {itemname}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {itemPrice.toLocaleString()} THB
          </Typography>
        </CardContent>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton size="small" color="secondary" onClick={decrementQuantity} disabled={quantity === 0}>
            <RemoveIcon fontSize="small" />
          </IconButton>
          <Typography variant="body2">{quantity}</Typography>
          <IconButton size="small" color="primary" onClick={incrementQuantity}>
            <AddIcon fontSize="small" />
          </IconButton>
          <Typography variant="body2" sx={{ ml: 1 }}>
            {(quantity * itemPrice).toLocaleString()} THB
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ItemCart;
