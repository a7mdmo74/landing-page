import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import img_01 from "../../images/feature_01.png";
import code from "../../images/code.png";
import support from "../../images/support.png";

import "./support.css";

const Support = () => {
  return (
    <section className="support" id="support">
      <Container>
        <Grid container spacing={4}>
          <Grid item sm={12} md={6}>
            <div className="support__left">
              <Typography component="h2" variant="h4">
                Do you need help? Our support team ready to help you
              </Typography>
              <Typography component="p" variant="p">
                Get your tests delivered at let home collect sample from the
                victory of the managements that supplies best design system
                guidelines ever.
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <img src={img_01} alt="img" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography component="h4" variant="h6">
                        Email client support <ArrowRightAltIcon />
                      </Typography>
                      <Typography component="p" variant="p">
                        Ultimate access to all credit popular exercises and
                        assessments materials
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <img src={code} alt="code" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography component="h4" variant="h6">
                        Live ticket support <ArrowRightAltIcon />
                      </Typography>
                      <Typography component="p" variant="p">
                        Total assessment corrections with live support tickets
                        download access system
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item sm={12} md={6}>
            <img src={support} alt="support" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Support;
