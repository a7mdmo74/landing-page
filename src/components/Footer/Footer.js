import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Grid container className="footer__grid" spacing={{ lg: 5, md: 2 }}>
          <Grid item xs={6} md={3}>
            <Typography component="h4" variant="h6">
              Company
            </Typography>
            <ul>
              <li>About</li>
              <li>Affiliate</li>
              <li>Careers & Culture</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography component="h4" variant="h6">
              About Us
            </Typography>
            <ul>
              <li>Support Center</li>
              <li>Customer Support</li>
              <li>About Us</li>
              <li>Copyright</li>
              <li>Popular Campaign</li>
            </ul>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography component="h4" variant="h6">
              Our Information
            </Typography>
            <ul>
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Site Map</li>
              <li>Store Hours</li>
            </ul>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography component="h4" variant="h6">
              My Account
            </Typography>
            <ul>
              <li>Press inquiries</li>
              <li>Social media</li>
              <li>Images & B-roll</li>
              <li>directories</li>
              <li>Permissions</li>
            </ul>
          </Grid>
        </Grid>
        <div className="footer__footer">
          <div>
            <Typography component="h3" variant="h5">
              Startup Landing
            </Typography>
            <Typography variant="p">Copyright by 2022 RedQ, Inc</Typography>
          </div>
          <ul>
            <li>Home</li>
            <li>Advertise</li>
            <li>Supports</li>
            <li>Marketing</li>
            <li>FAQ</li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
