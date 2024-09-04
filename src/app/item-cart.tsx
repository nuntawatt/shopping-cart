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

const ItemCart: React.FC<ItemCartProps> = ({
  itemname,
  itemPrice,
  image,
  handleIncremantal,
  handleDecremental,
}) => {
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
    <Card
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        mb: 4,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '15px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.03)',
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: 150,  // Reduced height
          width: 'auto',
          objectFit: 'cover',
          margin: '0 auto', // Centering the image
        }}
        image={image}
        alt={itemname}
      />
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardContent sx={{ flex: '1 0 auto', textAlign: 'center' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              mb: 1,
              color: '#333',
              fontWeight: 'bold',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
            }}
          >
            {itemname}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{
              color: '#777',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
            }}
          >
            {itemPrice.toLocaleString()} THB
          </Typography>
        </CardContent>
        <Stack direction="column" spacing={1} justifyContent="center" alignItems="center">
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <IconButton
              size="small"
              color="secondary"
              onClick={decrementQuantity}
              disabled={quantity === 0}
              aria-label={`Decrease quantity of ${itemname}`}
              sx={{
                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#f5f7fa',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 'bold',
                color: '#333',
                minWidth: '30px',
                textAlign: 'center',
              }}
            >
              {quantity}
            </Typography>
            <IconButton
              size="small"
              color="primary"
              onClick={incrementQuantity}
              aria-label={`Increase quantity of ${itemname}`}
              sx={{
                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#f5f7fa',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 'bold',
              color: '#333',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
            }}
          >
            {(quantity * itemPrice).toLocaleString()} THB
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
};

export default ItemCart;
