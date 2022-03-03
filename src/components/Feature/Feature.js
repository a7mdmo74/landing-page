import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { data } from "./data";
import "./feature.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "4rem 2rem",
  backgroundColor: "#f9fbfd",
  borderBottom: "1px solid #e9edf5",
  borderRight: "1px solid #e9edf5",
  textAlign: "center",
  color: theme.palette.text.secondary,
  position: "relative",
}));

const Feature = () => {
  return (
    <section className="feature" id="feature">
      <Container>
        <div className="feature__content">
          <Typography component="p" variant="p">
            Ideal solutions for you
          </Typography>
          <Typography component="h2" variant="h4">
            Go beyond ultimate features
          </Typography>
        </div>
        <Grid container spacing={{ md: 3 }}>
          {data.map((item) => {
            const { id, img, title, body } = item;
            return (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <Item className="feature__grid">
                  <img src={img} alt={img} />
                  <div className="grid__content">
                    <Typography component="h3" variant="h5">
                      {title}
                    </Typography>
                    <Typography component="p" variant="p">
                      {body}
                    </Typography>
                  </div>
                  <Button className="btn">learn more</Button>
                </Item>
              </Grid>
            );
          })}
          {/* <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid> */}
        </Grid>
      </Container>
    </section>
  );
};

export default Feature;
