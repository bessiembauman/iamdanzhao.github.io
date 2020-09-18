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
        <Grid container>
          <Grid item xs={12}>
            <a href="https://instagram.com/bessiemb" class="fa" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://linkedin.com/in/bessiebauman35"
              class="fa"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:bessie.bauman@gmail.com" class="fa">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </Grid>
          <Grid item xs={12} className="credits">
            <strong>
              © 2020 Bessie Bauman | Website By Easton Crupper | Inspired By{" "}
              <a href="http://www.danielzhao.com" target="_blank">
                {" "}
                Daniel Zhao
              </a>
            </strong>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}

export default App;
