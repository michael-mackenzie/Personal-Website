import React from "react";
import { Link } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer(props) {
  return (
      <p>
        <Link href="https://www.linkedin.com/in/-michaelmackenzie/"><LinkedInIcon className={props.cname}/></Link>
        <Link href="https://github.com/michael-mackenzie/"><GitHubIcon className={props.cname}/></Link>
        <Link href="https://www.instagram.com/mikemackenzie_/"><InstagramIcon className={props.cname}/></Link>
      </p>
  );
}

export default Footer;
