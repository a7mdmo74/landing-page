import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import google from "../../images/google.png";
import paypal from "../../images/paypal.png";
import dropbox from "../../images/dropbox.png";

import "./home.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "60%",
    marginRight: "5px !important",
  },
  button: {
    padding: "1rem 2rem !important",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className="home">
      <Container>
        <div className="home__content">
          <Typography component="h1" variant="h2">
            A Creative way to grow your Exciting Business ideas
          </Typography>
          <Typography component="p" variant="p">
            Get your tests delivered at let home collect sample from the victory
            of the managements that supplies best design system guidelines ever.
          </Typography>
          <div className="home__email">
            <TextField
              variant="outlined"
              className={classes.root}
              label="Enter Email Address"
            />
            <Button variant="contained" className={classes.button}>
              Get Started
            </Button>
          </div>
          <div className="home__clients">
            <Typography component="p" variant="p">
              Our clients
            </Typography>
            <div className="home__logo">
              <img src={paypal} alt="paypal" />
              <img src={google} alt="google" />
              <img src={dropbox} alt="dropbox" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
