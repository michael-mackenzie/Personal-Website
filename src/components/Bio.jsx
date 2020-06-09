import React from 'react';
import { Grid, Divider } from "@material-ui/core";
import Footer from "./Footer";

function Bio() {

  const style = {
    divider: {width: "60%", margin: "auto"},
    bottomd: {width: "100%", margin: "auto"},
    dividertop: {width: "60%", margin: "auto", marginTop: "80px", marginBottom: "30px"},
    dividerbottom: {width: "60%", margin: "auto", marginTop: "20px", marginBottom: "120px"},
  };

  return (
    <div>
      <Divider style={style.dividertop}/>
      <Grid container alignContent="center" justify="center" className="main">
        <Grid item xs={6} className="bio1">
          <h4 className="biodef"> engineer / web developer / athlete / thinker</h4>
          <p className="biodef">harnessing technology positively every day.</p>
        </Grid>
      </Grid>
      <Divider style={style.dividerbottom}/>
      <Grid container alignContent="stretch" justify="center" className="main anotherphoto">
        <Grid item xs={12} className="bio2">
          <p>Sports</p>
        </Grid>
      </Grid>
      <Divider style={style.divider}/>
      <Grid container alignContent="stretch" justify="center" className="main">
        <Grid item xs={12} className="bio4">
          <h2>Courses Completed</h2>
        </Grid>
        <Grid item xs={4} className="bio3">
          <h4>External Courses</h4>
          <ul>
            <li>Udemy "The Complete 2020 Web Development Bootcamp" by Dr. Angela Yu</li>
          </ul>
          <h4>400/Grad Level</h4>
          <ul>
            <li>Data Compression & Source Coding</li>
            <li>Control of Stochastic Systems</li>
            <li>A.I. & Interactive Systems</li>
            <li>Information Theory</li>
            <li>Stochastic Processes & Applications</li>
            <li>Modern Control Theory</li>
          </ul>
        </Grid>
        <Grid item xs={4} className="bio3">
          <h4>300 Level</h4>
          <ul>
            <li>Database Management Systems</li>
            <li>Algorithms I</li>
            <li>Probability I & II</li>
            <li>Math of Engineering Systems</li>
            <li>Introducation to Control Theory</li>
            <li>Microprocessor Systems</li>
            <li>Complex Analysis</li>
            <li>Math Methods for Engineers</li>
          </ul>
        </Grid>
        <Grid item xs={4} className="bio3">
          <h4>200 Level</h4>
          <ul>
            <li>Real Analysis</li>
            <li>Computer Architecture</li>
            <li>Electricity & Magnetism</li>
            <li>Linear Algebra</li>
            <li>Differential Equations</li>
            <li>Digital Systems</li>
            <li>Advanced Calculus</li>
            <li>Info & Data Structures</li>
            <li>Algebraic Structures</li>
          </ul>
        </Grid>
        {/*<Grid item xs={6} className="bio3">
          <h2>Who Am I?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus. Morbi tristique senectus et netus et. Volutpat blandit aliquam etiam erat. Porta lorem mollis aliquam ut porttitor leo. Placerat vestibulum lectus mauris ultrices eros. Diam vel quam elementum pulvinar etiam non. Tempor commodo ullamcorper a lacus vestibulum sed. Condimentum lacinia quis vel eros donec ac. Eget velit aliquet sagittis id consectetur purus ut. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget.
            <br />
            Odio euismod lacinia at quis risus sed vulputate. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. At in tellus integer feugiat scelerisque varius morbi enim nunc. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Laoreet id donec ultrices tincidunt arcu non sodales neque. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Sollicitudin aliquam ultrices sagittis orci a. Enim tortor at auctor urna. Consequat mauris nunc congue nisi vitae suscipit. Dis parturient montes nascetur ridiculus. In hac habitasse platea dictumst quisque sagittis purus sit.
            <br />
            Amet est placerat in egestas erat imperdiet sed euismod nisi. Ut ornare lectus sit amet. Lorem ipsum dolor sit amet consectetur adipiscing. Vivamus arcu felis bibendum ut tristique et egestas quis. Ultricies mi eget mauris pharetra et ultrices neque ornare. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Eu turpis egestas pretium aenean pharetra magna ac placerat. At augue eget arcu dictum varius duis at consectetur lorem. Habitasse platea dictumst quisque sagittis. Tincidunt vitae semper quis lectus nulla at volutpat. Felis imperdiet proin fermentum leo vel. Nibh ipsum consequat nisl vel pretium lectus quam id. Pellentesque dignissim enim sit amet venenatis. Faucibus et molestie ac feugiat sed. Faucibus nisl tincidunt eget nullam non. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.
            <br />
            Egestas congue quisque egestas diam in arcu cursus euismod. Cursus vitae congue mauris rhoncus aenean. At urna condimentum mattis pellentesque id nibh tortor. Volutpat maecenas volutpat blandit aliquam etiam. Quis eleifend quam adipiscing vitae. Et sollicitudin ac orci phasellus. Sit amet nisl purus in mollis nunc sed id. Quis varius quam quisque id diam vel quam. Elementum curabitur vitae nunc sed velit. Sed augue lacus viverra vitae congue eu consequat ac felis. Consectetur a erat nam at lectus urna duis. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Sapien eget mi proin sed libero enim. Faucibus in ornare quam viverra orci sagittis eu.
            <br />
          </p>
        </Grid>*/}
      </Grid>
      <Divider style={style.bottomd}/>
      <Grid container alignContent="stretch" justify="center" className="main">
        <Grid item xs={12} className="format5">
          <Footer cname="ficons"/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Bio;
