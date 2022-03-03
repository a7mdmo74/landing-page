import { Container, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./customer.css";
import img from "../../images/customer.png";
const Customer = () => {
  return (
    <section className="customer">
      <Container>
        <Grid container spacing={{ md: 4 }}>
          <Grid item sm={12} md={6}>
            <img src={img} alt="img" />
          </Grid>
          <Grid item sm={12} md={6}>
            <div className="customer__right">
              <Typography component="h2" variant="h4">
                Customer support is our main priority with their hundred percent
                satisfaction.
              </Typography>
              <Typography component="p" variant="p">
                Get your tests delivered at let home collect sample from the
                victory of the managements that supplies best design system
                guidelines ever.
              </Typography>
              <ul>
                <li>
                  <CheckCircleIcon
                    sx={{ marginRight: "0.5rem" }}
                    color="primary"
                  />{" "}
                  Medical and vision
                </li>
                <li>
                  <CheckCircleIcon
                    sx={{ marginRight: "0.5rem" }}
                    color="primary"
                  />{" "}
                  Life insurance
                </li>
                <li>
                  <CheckCircleIcon
                    sx={{ marginRight: "0.5rem" }}
                    color="primary"
                  />{" "}
                  HSAs and FSAs
                </li>
                <li>
                  <CheckCircleIcon
                    sx={{ marginRight: "0.5rem" }}
                    color="primary"
                  />{" "}
                  Commuter benefits
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Customer;
