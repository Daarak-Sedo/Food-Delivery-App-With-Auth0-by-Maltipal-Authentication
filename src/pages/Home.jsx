import React, { useState ,useEffect} from "react";
import Layout from "../components/Layout/Layout";
import Carosual from "../components/Carosual";
import CardComponent from "../components/Products";
import { Container, Checkbox, Typography, Stack, Box } from "@mui/material";
import { useAuth0, User } from "@auth0/auth0-react";



const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["Bowl", "Thali", "Salad", "breakFast"];

  /**
   * @method useAuth0
   * @param object
   * @description Getting data from Auth0
   */
  const { user } = useAuth0();
  const setLocalStorageData = async () => {
     if (user) {
      await localStorage.setItem("user_name", user?.given_name);
      await  localStorage.setItem("user_profile", user?.picture);
      await localStorage.setItem("user_email", user?.email);
    }
  };
  useEffect(() => {
    setLocalStorageData();
  }, [user]);


  return (
    <Layout>
      <Carosual />
      <Container
        maxWidth="xl"
        sx={{ display: "flex", flexDirection: "row", marginBottom: "50px" }}
      >
        <Box
          sx={{
            width: "150px",
            overflowY: "auto",
            position: "sticky",
            top: "0",
            height: "calc(100vh - 100px)", // Adjust this value as needed
          }}
        >
          <Typography>Filter By Category</Typography>
          {categories?.map((category) => (
            <Stack key={category} direction="row" sx={{ alignItems: "center" }}>
              <Checkbox
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
              />
              <Typography>{category}</Typography>
            </Stack>
          ))}
        </Box>
        <Box sx={{ flex: 1, overflowY: "auto" }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            All Day BREAKFAST -
          </Typography>
          <CardComponent filterType={selectedCategory} />
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
