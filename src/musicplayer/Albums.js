import React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
export default function Albums(props) {
  return (
    <div style={{ margin: "10px", padding: "10px" }}>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card variant="outlined">
              <Item
                source="../covers/cover1.jpeg"
                song="song1.mpeg"
                passingsong={(song) => props.updatesong(song)}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <Item
                source="../covers/cover2.jpeg"
                song="song2.mpeg"
                passingsong={(song) => props.updatesong(song)}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <Item
                source="../covers/cover3.jpeg"
                song="song3.mpeg"
                passingsong={(song) => props.updatesong(song)}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <Item
                source="../covers/cover4.jpeg"
                song="song4.mpeg"
                passingsong={(song) => props.updatesong(song)}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <Item
                source="../covers/cover5.jpeg"
                song="song5.mpeg"
                passingsong={(song) => props.updatesong(song)}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <Item
                source="../covers/cover6.jpeg"
                song="song6.mpeg"
                passingsong={(song) => props.updatesong(song)}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <Item
                source="../covers/cover7.jpeg"
                song="song7.mpeg"
                passingsong={(song) => props.updatesong(song)}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <Item
                source="../covers/cover8.jpeg"
                song="song8.mpeg"
                passingsong={(song) => props.updatesong(song)}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <Item
                source="../covers/cover9.jpeg"
                song="song9.mpeg"
                passingsong={(song) => props.updatesong(song)}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
