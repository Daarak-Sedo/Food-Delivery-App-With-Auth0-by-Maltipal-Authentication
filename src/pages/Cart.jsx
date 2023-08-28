// import { getNodeText } from '@testing-library/react';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../ store/cartSlice";
import {
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Stack,
} from "@mui/material";
import Layout from "../components/Layout/Layout";

const Cart = () => {
  const dispatch = useDispatch(); // To Send Action

  const products = useSelector((state) => state.cart); // to get Action/Function

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      products?.map((product) => {
        total = total + product.price;
      });
      return total.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Stack
        sx={{ display: "flex", flexDirection: { sm: "column", md: "row" } }}
      >
        <Container component="main" maxWidth="md">
          <Typography variant="h4"> Cart - </Typography>

          {products?.map((product) => (
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
                <Typography variant="body2" color="text.secondary">
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          ))}
        </Container>

        <Container component="main" maxWidth="md">
          <Typography variant="h4"> Cart Summary </Typography>
          <Typography variant="h6"> Total | Checkout | Payment</Typography>

          <hr />
          <Typography variant="h4">
            {" "}
            total price -
            <Typography variant="h4" component="span" sx={{ color: "green", margin:2 }}>
              {totalPrice()}
            </Typography>
          </Typography>
        </Container>
      </Stack>
    </Layout>
  );
};

export default Cart;
