import React, { useEffect, useState } from "react";
import {
  Card,
  Box,
  List,
  Container,
  ListItem,
  CardActions,
  CardContent,
  Button,
  CardMedia,
  ListItemText,
  AppBar,
  Divider,
  Toolbar,
  Grid,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  Typography,
  Tooltip,
} from "@mui/material";
import brk_fast_img1 from "../images/break fast imges/brk fast img 1.jpg";
import brk_fast_img2 from "../images/break fast imges/brk fast img2.jpg";
import brk_fast_img3 from "../images/break fast imges/brk fast img3.jpg";
import brk_fast_img4 from "../images/break fast imges/brk fast img4.jpeg";
import brk_fast_img5 from "../images/break fast imges/brk fast img 5.jpeg";
import brk_fast_img6 from "../images/break fast imges/brk fast img 6.jpg";
import brk_fast_img7 from "../images/break fast imges/btk fast img 7.JPG";
import brk_fast_img8 from "../images/break fast imges/brk fast img 8.jpeg";

import thali_img1 from "../images/thali images/thali img1.JPG";
import thali_img2 from "../images/thali images/thali img2.JPG";
import thali_img3 from "../images/thali images/thali img3.JPG";
import thali_img4 from "../images/thali images/thali img4.JPG";
import thali_img5 from "../images/thali images/thali img5.JPG";
import thali_img6 from "../images/thali images/thali img6.JPG";
import thali_img7 from "../images/thali images/thali img7.JPG";
import thali_img8 from "../images/thali images/thali img8.JPG";

import { useDispatch, useSelector } from "react-redux";
import { add } from "../ store/cartSlice";

const Cart = ({ filterType }) => {
  const [dataToMap, setDataToMap] = useState(null);

  const dispatch = useDispatch(); // to send Action
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  const data = [
    {
      id: 1,
      name: "Meaty Omelette",
      category: "breakFast",
      price: 199,
      image: brk_fast_img1,
    },
    {
      id: 2,
      name: "Tex Mex Meaty Omelette",
      category: "breakFast",

      price: 149,
      image: brk_fast_img2,
    },
    {
      id: 3,
      name: "Creamy Chicken Omelette",
      category: "breakFast",
      price: 600,
      image: brk_fast_img3,
    },
    {
      id: 4,
      name: "Butter Bun Maska With Scrambled Eggs",
      category: "breakFast",
      price: 189,
      image: brk_fast_img4,
    },
    {
      id: 5,
      name: "Creamy Egg Bread Scramble",
      category: "breakFast",
      price: 153,
      image: brk_fast_img5,
    },
    {
      id: 6,
      name: "Millet Upma",
      category: "breakFast",
      price: 149,
      image: brk_fast_img6,
    },
    {
      id: 7,
      name: "The Greenhouse",
      category: "breakFast",
      price: 409,
      image: brk_fast_img7,
    },
    {
      id: 8,
      name: "Cheese French Toast Combo",
      category: "breakFast",
      price: 149,
      image: brk_fast_img8,
    },

    {
      id: 9,
      name: "Meaty Omelette",
      category: "Thali",
      price: 199,
      image: thali_img1,
    },
    {
      id: 10,
      name: "Tex Mex Meaty Omelette",
      category: "Thali",
      price: 199,
      image: thali_img2,
    },
    {
      id: 11,
      name: "Creamy Chicken Omelette",
      category: "Thali",
      price: 243,
      image: thali_img3,
    },
    {
      id: 12,
      name: "Butter Bun Maska With Scrambled Eggs",
      category: "Thali",
      price: 465,
      image: thali_img4,
    },
    {
      id: 13,
      name: "Creamy Egg Bread Scramble",
      category: "Thali",
      price:320,
      image: thali_img5,
    },
    {
      id: 14,
      name: "Millet Upma",
      category: "Thali",
      price: 464,
      image: thali_img6,
    },
    {
      id: 15,
      name: "The Greenhouse",
      category: "Thali",
      price: 126,
      image: thali_img7,
    },
    {
      id: 16,
      name: "Cheese French Toast Combo",
      category: "Thali",
      price: 212,
      image: thali_img8,
    },
  ];

  useEffect(() => {
    if (filterType) {
      const filteredData = data.filter((products) => {
        return products.category === filterType; // Add the return statement here
      });
      setDataToMap(filteredData);
    } else {
      setDataToMap(data);
    }
  }, [filterType]);

  

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {dataToMap?.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345, height: "100%" }}>
                {/*---------- Height 100% will give/Adjust - same height to Each Card ---------------*/}
                <CardMedia
                  component="img"
                  image={product.image}
                  alt="green iguana"
                  sx={{ height: 200 }} // Set a fixed height for the image
                />
                <CardContent>
                  {/* <Typography  variant="h5" component="div" noWrap>  //--------  noWrap will show- ...
                    {item.name}
                  </Typography> */}
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="title">{product.price}</Typography>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => handleAdd(product)}
                  >
                    Add
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Cart;
