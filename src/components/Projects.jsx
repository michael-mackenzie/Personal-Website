import React from 'react';
import { Grid, Divider } from "@material-ui/core";
import Footer from "./Footer";

function Projects() {

  const style = {
    divider: {width: "100%", margin: "auto"}
  };

  return (
    <div>
      <Grid container alignItems="center" justify="center" className="main">
        <Grid item xs={3} className="project projtitle">
          <h2>Feel-It: A Sentiment Analysis Tool Using Twitter Scrapers</h2>
        </Grid>
        <Grid item xs={9} className="projdes">
          <ul>
            <li>Implemented a sentiment analysis tool (Natural Language Processing) in combination with a twitter crawler that scraped tweets directly from twitter</li>
            <li>Used Python, Flask, and JavaScript</li>
          </ul>
        </Grid>
      </Grid>
      <Divider style={style.divider}/>
      <Grid container alignItems="center" justify="center" className="main">
        <Grid item xs={9} className="projdes">
          <ul>
            <li>Designed and created a responsive personal website hosted on Heroku</li>
            <li>Used React, Bootstrap, Material-UI</li>
          </ul>
        </Grid>
        <Grid item xs={3} className="projtitle">
          <h2>Personal Resume Website</h2>
        </Grid>
      </Grid>
      <Divider style={style.divider}/>
      <Grid container alignItems="center" justify="center" className="main">
        <Grid item xs={3} className="projtitle">
          <h2>Targeted Advertisement Using Reinforcement Learning and Stochastic Control</h2>
        </Grid>
        <Grid item xs={9} className="projdes">
          <ul>
            <li>Designed a reinforcement learning model using stochastic control to learn the ideal distribution of advertisements for a given population</li>
            <li>Used Python and Matlab</li>
          </ul>
        </Grid>
      </Grid>
      <Divider style={style.divider}/>
      <Grid container alignContent="stretch" justify="center" className="main">
        <Grid item xs={12} className="format5">
          <Footer cname="ficons"/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Projects;
