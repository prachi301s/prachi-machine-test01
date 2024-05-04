import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import useGetPlace from "../hooks/useGetPlace";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CityCard from "../components/CityCard";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
const City = () => {
  const [addCity, setAddCity] = useState(false);
  const localStorageData = JSON.parse(localStorage.getItem("loginData"));
  const navigate = useNavigate();

  // Declare token variable and initialize it from local storage data
  const token = localStorageData ? localStorageData.token : "";
  console.log(token);
  // Call the hook with the token
  const { data, isLoading } = useGetPlace(token);

  console.log(data?.data?.results?.cities);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid container spacing={2} mt={5}>
          <Grid item xs={12}>
            <Grid item xs={6}>
              <Typography variant="h4">Cities</Typography>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
          {data?.data?.results?.cities?.map((city) => (
            <Grid item xs={4}>
              <CityCard cityName={city.name} total_place={city.total_places} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default City;
