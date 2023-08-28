import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Card,
  Box,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Divider,
  Toolbar,
  IconButton,
  Drawer,
  Container,
  Typography,
} from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          my: 15,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Welcome To My Restaurant
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quod,
          suscipit, aperiam totam autem culpa cum eveniet dolorum quasi est
          perspiciatis laborum. Nam recusandae nihil quia odio voluptatibus
          facere omnis facilis rerum? Ab eum beatae nobis reiciendis, qui
          temporibus aliquid, nesciunt velit sed quam recusandae necessitatibus,
          tempora maxime. Repellendus incidunt, maxime labore dolorum eos
          aperiam unde? At veritatis nesciunt eos quas cupiditate blanditiis est
          quam maiores, amet, soluta exercitationem voluptatum, veniam
          assumenda? Ratione perferendis officiis deserunt nostrum aspernatur
          sed asperiores! Earum sunt placeat ducimus sint, deleniti amet esse
          saepe voluptatem commodi laudantium quibusdam repellat nobis libero at
          consectetur adipisci ipsa.
        </Typography>

        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          deserunt libero reprehenderit cum sint fugit cumque temporibus modi
          facere eveniet amet obcaecati ducimus harum velit maxime vel qui
          voluptatibus quam odio corrupti saepe, voluptas dolorum quidem
          tempore? Esse sapiente molestias minus enim quisquam dolorum eum culpa
          ullam impedit velit quo, corporis ducimus numquam dignissimos
          inventore maiores. Nam deleniti itaque nostrum neque dolorum dolores,
          aliquam, voluptatum sapiente doloribus laborum perspiciatis ipsam, quo
          ut nisi distinctio sunt nihil est blanditiis perferendis eveniet
          nesciunt! Nostrum, voluptatum eveniet repellat vel officia deleniti
          tempore voluptatibus perferendis esse eaque temporibus porro?
          Aspernatur beatae deleniti illo autem!
        </Typography>
      </Container>
    </Layout>
  );
};

export default About;
