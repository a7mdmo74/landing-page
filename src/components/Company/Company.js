import { Button, Container, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import clients from "../../images/clients.png";

import "./company.css";

const Company = () => {
  return (
    <section className="company">
      <Container>
        <div className="company__content">
          <Typography component="h2" variant="h4">
            Company who also worked us
          </Typography>
          <Typography component="p" variant="p">
            Every email, web page, and social media post makes an impression on
            your customers. With our software you can be confident it's
            impression.
          </Typography>
          <Button className="btn">
            Expolre Details{" "}
            <ArrowForwardIosIcon className="btn__icon" sx={{ width: "1rem" }} />
          </Button>
        </div>
        <img src={clients} alt="clients" />
      </Container>
    </section>
  );
};

export default Company;
