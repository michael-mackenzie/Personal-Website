import React from 'react';
import { Grid, Divider } from "@material-ui/core";
import Footer from "./Footer";

function Contact() {

  const style = {
    divider: {width: "60%", margin: "auto"},
    bottomd: {width: "100%", margin: "auto"},
    info: {paddingTop: "60px", paddingBottom: "30px"}
  };

  return (
    <div>
      <div>
        <Grid container alignContent="center" justify="center" className="divtest">
          <Grid item xs={6}>
            <h1>Email</h1>
            <h4 style={style.info}>mikedavidmackenzie@gmail.com</h4>
          </Grid>
        </Grid>
        <Divider style={style.divider}/>
        <Grid container alignContent="stretch" justify="center" className="divtest">
          <Grid item xs={12}>
            <h1>Phone</h1>
            <h4 style={style.info}>705 761 2524</h4>
          </Grid>
        </Grid>
        <Divider style={style.bottomd}/>
        <Grid container alignContent="stretch" justify="center" className="main">
          <Grid item xs={12} className="format5">
            <Footer cname="ficons"/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Contact;
