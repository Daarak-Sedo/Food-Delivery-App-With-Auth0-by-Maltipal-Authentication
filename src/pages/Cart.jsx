// import { getNodeText } from '@testing-library/react';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  ButtonGroup,
  Stack,
} from "@mui/material";
import Layout from "../components/Layout/Layout";
import { add, remove, increment, decrement } from "../ store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch(); // To Send Action

  const products = useSelector((state) => state.cart); // to get Action/Function
  console.log("products", products);

  const [calculatedTotalPrice, setCalculatedTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0)

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleIncrement = (productId) => {
    dispatch(increment(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrement(productId));
  };

  //total price 

  let totalPrice = () => {
      let total = 0;
      products.items?.forEach((product) => {
        total = total + product.price * product.quantity;
      });
      setCalculatedTotalPrice(total);
  };

  useEffect(() => {
    totalPrice();
  }, [products]);

    //total Quantity

  return (
    <Layout>
      <Stack
        sx={{ display: "flex", flexDirection: { sm: "column", md: "row" } }}
      >
        <Container component="main" maxWidth="md">
          <Typography variant="h4"> Cart - </Typography>

          {products.items?.map((product) => (
             // Check if the product's quantity is greater than 0
             product.quantity > 0 && (
            <Card
              sx={{
                maxWidth: "100%",
                maxHeight: 100,
                display: "flex",
                justifyContent: "space-between",
                padding: 3,
                mt: 4,
                mb: 4,
              }}
              key={product.id}
            >
              <CardMedia
                component="img"
                image={product.image}
                sx={{ width: "80px" }}
              />
              <CardContent>
                <Typography variant="title">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: "green"}}>
                  {product.price} ₹
                </Typography>
              </CardContent>
              <CardActions>
                <Stack spacing={2} direction="row">
                  {product.quantity > 0 && (
                    <ButtonGroup
                      disableElevation
                      variant="contained"
                      aria-label="Quantity control buttons"
                    >
                      <Button
                        size="small"
                        onClick={() => handleDecrement(product.id)}
                      >
                        -
                      </Button>
                      <Typography variant="body1">
                        {product.quantity}
                      </Typography>
                      <Button
                        size="small"
                        onClick={() => handleIncrement(product.id)}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  )}
                  <Button
                    variant="contained"
                    onClick={() => handleRemove(product.id)}
                  >
                    Remove
                  </Button>
                </Stack>
              </CardActions>
            </Card>
             )
          ))}
        </Container>

        <Container component="main" maxWidth="md">
          <Typography variant="h4"> Cart Summary </Typography>
          <Typography variant="h6"> Total | Checkout | Payment</Typography>

          <hr />
          <Typography variant="h4">
            total price -
            <Typography
              variant="h4"
              component="span"
              sx={{ color: "green", margin: 2 }}
            >
              {calculatedTotalPrice}
            </Typography>
          </Typography>
        </Container>
      </Stack>
    </Layout>
  );
};

export default Cart;
