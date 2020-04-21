import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./Navbar.scss";
import Drawer from "../Drawer/Drawer";
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const { links } = props;
  const logo = props.logo.image || "logo.png";
  const logoHeight = props.logo.height || "100px";
  const imageLogo = require(`../../images/${logo}`);

  

  return (
    <div >
      <AppBar position="fixed" className={"appbar"}>
        <Container maxWidth="lg">
          <Toolbar>
            <Grid container  alignItems="center" spacing={3}>
              <Grid item xs={6} md={4}>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
                <img
                  src={imageLogo}
                  style={{
                    verticelAlign: "middle",
                    height: logoHeight,
                    display: "block",
                    marginRight: "auto",
                  }}
                />
              </Grid>
              <Hidden mdDown>
              <Grid item xs={4} justify="center" alignItems="center">
                <p style={{ textAlign: "center" }}>
                  {links.map((links, index) => (
                    <Button color="inherit" className={"links"}>
                      {links.link_title}
                    </Button>
                  ))}
                </p>
              </Grid>
              </Hidden>
              <Grid item xs={6} md={4}>
              <Hidden mdDown>

                <Button
                  variant="contained"
                  color="primary"
                  style={{ display: "block", margin: "auto" }}
                >
                  Buy Now!
                </Button>
                </Hidden>
                <Hidden mdUp>

                <Drawer
                  position={"top"}
                  button={
                    <Button
                    variant="contained"
                    color="primary"
                    style={{ display: "block", marginLeft: "auto" }}
                    >
                      Buy Now!
                    </Button>
                  }
                  links={links}
                  />
                  </Hidden>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
