import React from 'react';
import { Grid } from "@material-ui/core";
import Footer from "./Footer";
import { Switch, Route, Link} from 'react-router-dom';
import Projects from "./Projects";
import Contact from "./Contact";
import Bio from "./Bio";

function Home() {
  return (
    <div>
      <Grid container alignContent="stretch" justify="center" className="textColor">
        <Grid item xs={12} className="format1">
          <p>Engineer and Problem Solver.</p>
        </Grid>
        <Grid item xs={4} className="format2">
          <Link style={{textDecoration: "none"}} className="linkProjects" to="/projects">
            <p>Projects</p>
          </Link>
        </Grid>
        <Grid item xs={4} className="format4">
          <Link style={{textDecoration: "none"}} className="linkBio" to="/bio">
            <p >Bio</p>
          </Link>
        </Grid>
        <Grid item xs={4} className="format3">
          <Link style={{textDecoration: "none"}} className="linkEducation" to="/contact">
            <p>Contact</p>
          </Link>
        </Grid>
        <Grid item xs={12} className="format5">
          <Footer cname="ficons1" />
        </Grid>
      </Grid>
      <Switch>
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/bio' component={Bio} />
      </Switch>
    </div>
  );
}

export default Home;
