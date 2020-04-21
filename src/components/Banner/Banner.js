import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import './Banner.scss'

export default function Banner(props) {
  const { image, height } = props.bannerImage;
  const { title, description } = props;
  const banner = require(`../../images/${image}`);

  return (
    <div>
      <Container maxWidth="lg" className={'banner'}>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item lg={4} sm={12}>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            <p
              className={'paragraph'}
            >
              {description}
            </p>
            <Button
              variant="contained"
              color="primary"
              className={'centralize'}
            >
              Getting Started
            </Button>
          </Grid>
          <Grid item lg={6} sm={12}>
            <img
              src={banner}
              style={{ height: height}}
              className={'centralize'}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
Banner.defaultProps = {
  bannerImage: { image: "banner.svg", height: "100px" },
  title: "Welcome to Calvento Files Develop Anything",
  description:
    "Calvento Files is a HTML5 template based on \nSass and Bootstrap 4 with modern and creative multipurpose design you can use it as a startups.",
};
