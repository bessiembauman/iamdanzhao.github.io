import React from "react";
import "./styles/home.css";
import { Route } from "react-router-dom";
import Home from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div>
      <nav>
        <header>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ paddingTop: "1em", paddingBottom: "2em" }}
          >
            <Grid item xs={10} style={{ textAlign: "center" }}>
              <div class="site-title">Bessie Bauman</div>
            </Grid>
          </Grid>
        </header>
      </nav>
      <Route path="/" component={Home} />
      <footer>
        <div class="icon-bar">
          <a href="https://instagram.com/bessiemb" class="fa">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com/in/bessiebauman35" class="fa">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:bessie.bauman@gmail.com" class="fa">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <p>
          <i>
            © 2020 Bessie Bauman | Website Inspired By{" "}
            <a href="https://www.danielzhao.com"> Daniel Zhao</a>
          </i>
        </p>
      </footer>
    </div>
  );
}

export default App;
