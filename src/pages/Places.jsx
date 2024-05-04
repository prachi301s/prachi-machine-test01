import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import useGetPlace from "../hooks/useGetPlace";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Loading from "./Loading";

const Places = () => {
  // Retrieve data from local storage
  const localStorageData = JSON.parse(localStorage.getItem("loginData"));

  // Declare token variable and initialize it from local storage data
  const token = localStorageData ? localStorageData.token : "";
  console.log(token);
  // Call the hook with the token
  const { data, isLoading } = useGetPlace(token);

  console.log(data?.data?.results);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid container spacing={2} mt={10}>
          <Grid item xs={12}>
            <Typography variant="h4">Places</Typography>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data?.data?.results.total_places}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Places
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">All List</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data?.data?.results.total_cities}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Cities
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">All List</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Places;
