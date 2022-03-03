import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import card_01 from "../../images/card_01.png";
import card_02 from "../../images/card_02.png";
import card_03 from "../../images/card_03.png";
import card_04 from "../../images/card_04.png";
import "./blog.css";

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <Container>
        <div className="blog__content">
          <Typography component="h2" variant="h6">
            Latest newsfeed
          </Typography>
          <Typography component="h3" variant="h5">
            Our recent blog post that updated
          </Typography>
        </div>
        <Grid container>
          <Grid item sm={12} md={6} lg={4}>
            <Card>
              <CardMedia
                component="img"
                height="360"
                image={card_01}
                alt="card_01"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Introducing our newest team with great experience
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Brian Halligan knows that you need more than a great product
                  to have a great brand.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            className="grid_02"
            sx={{ marginTop: "4.3rem" }}
            sm={12}
            md={6}
            lg={4}
          >
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={card_02}
                alt="card_02"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  New banking application has developed and we expecting good
                  feedback
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={12} lg={4}>
            <Grid item md={12} lg={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="360"
                  image={card_03}
                  alt="card_03"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Introducing our newest team with great experience
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Brian Halligan knows that you need more than a great product
                    to have a great brand.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={12} lg={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="360"
                  image={card_04}
                  alt="card_04"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Introducing our newest team with great experience
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Brian Halligan knows that you need more than a great product
                    to have a great brand.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Blog;
