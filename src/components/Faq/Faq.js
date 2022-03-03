import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./faq.css";
import { useState } from "react";
const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section className="faq" id="faq">
      <Container>
        <div className="faq__content">
          <div className="faq__title">
            <Typography component="h1" variant="h6">
              Get your question answer
            </Typography>
            <Typography component="h3" variant="h4">
              Frequently asked question
            </Typography>
          </div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                01. Which domain should I purchase?
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Get your website tests delivered at the home collect a sample.
                Simply contact
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Get your website tests delivered at the home collect a sample.
                Simply contact us and we'll move your hosting account from any
                other provider, regardless of the control panel. If at anytime
                your website is down for more than 0.1% result with proper
                investigation experiments.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                02. What are some tips when choosing a name?
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                We make it easy to move to CometNine. Simply contact us and
                we'll move your
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We make it easy to move to CometNine. Simply contact us and
                we'll move your hosting account from any other provider,
                regardless of the control panel. If at anytime your website is
                down for more than 0.1% result with proper investigation
                experiments.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                03. What if I need help choosing the right domain?
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Create a hub for cross-functional work that also works with all.
                Simply contact
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Create a hub for cross-functional work that also works with all.
                Simply contact us and we'll move your hosting account from any
                other provider, regardless of the control panel. If at anytime
                your website is down for more than 0.1% result with proper
                investigation experiments.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                04. Can I upgrade or downgrade my web hosting subscription
                system?
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                The pricing made me a little hesitant at first but I have been.
                Simply contact us
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The pricing made me a little hesitant at first but I have been.
                Simply contact us and we'll move your hosting account from any
                other provider, regardless of the control panel. If at anytime
                your website is down for more than 0.1% result with proper
                investigation experiments.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ marginBottom: "2rem" }}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                05. Learn from community on Brandwagon
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Stop your viewers from getting distracted. Publish videos to.
                Simply contact us
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Stop your viewers from getting distracted. Publish videos to.
                Simply contact us and we'll move your hosting account from any
                other provider, regardless of the control panel. If at anytime
                your website is down for more than 0.1% result with proper
                investigation experiments.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="faq__footer">
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              padding: "1rem 1.5rem",
              marginTop: "1.5rem",
            }}
          >
            Still Question? Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
