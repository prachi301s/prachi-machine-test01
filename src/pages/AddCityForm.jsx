import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useAddCity from "../hooks/useAddCity";

const AddCityForm = () => {
  const localStorageData = JSON.parse(localStorage.getItem("loginData"));

  // Declare token variable and initialize it from local storage data
  const token = localStorageData ? localStorageData.token : "";
  console.log(token);
  const { register, handleSubmit, reset } = useForm();
  const { mutate } = useAddCity(token);
  const handleCityData = (data) => {
    const { country, id, lat, lon, name, rating, state, zipcode } = data;
    console.log(data);
    const cityData = {
      city_id: id,
      name: name,
      country: country,
      zip_code: zipcode,
      description: "",
      lat: lat,
      lon: lon,
      rating: rating,
      views_count: "",
      is_active: "true",
      is_verified: "true",
      state: state,
      activities: [],
      tags: ["tag-007", "tag-013"],
      token:token
    };
    mutate(cityData, {
      onSuccess: (data) => {
        console.log(data);
        if (!data?.status) {
          let errorMessage = data?.message?.toLowerCase();
          setError(errorMessage);
          toast.error("Entered incorrect Credentials ");
          return;
        }

        reset();
        navigate("/home");
      },
      onError: (errors) => {
        console.error(errors);
      },
    });
  };
  return (
    <>
      <Grid container spacing={2} mt={10}>
        <Grid item xs={12} border="1px solid red">
          <form
            onSubmit={handleSubmit(handleCityData)}
            style={{ width: "100%" }}
          >
            <Typography m={3} variant="h5">
              Add city
            </Typography>
            <Grid container xs={12}>
              <Grid xs={6}>
                <TextField
                  id="outlined-basic"
                  label="City Id"
                  variant="outlined"
                  type="username"
                  fullWidth
                  {...register("id")}
                />
              </Grid>

              <Grid xs={6}>
                <TextField
                  id="outlined-basic"
                  label="City Name"
                  variant="outlined"
                  type="text"
                  fullWidth="true"
                  {...register("name")}
                />
              </Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid xs={6} columnGap={5}>
                <TextField
                  id="outlined-basic"
                  label="Country"
                  variant="outlined"
                  type="username"
                  fullWidth
                  {...register("country")}
                />
              </Grid>

              <Grid xs={6}>
                <TextField
                  id="outlined-basic"
                  label="ZipCode"
                  variant="outlined"
                  type="number"
                  fullWidth
                  {...register("zipcode")}
                />
              </Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Latitude"
                  variant="outlined"
                  //   type="numbe"
                  fullWidth
                  {...register("lat")}
                />
              </Grid>

              <Grid xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Longitude"
                  variant="outlined"
                  //   type="username"
                  fullwidth
                  {...register("lon")}
                />
              </Grid>
            </Grid>{" "}
            <Grid container xs={12}>
              <Grid xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Rating"
                  variant="outlined"
                  type="number"
                  fullWidth
                  {...register("rating")}
                />
              </Grid>

              <Grid xs={6}>
                <TextField
                  id="outlined-basic"
                  label="State"
                  variant="outlined"
                //   type="number"
                  fullwidth
                  {...register("state")}
                />
              </Grid>
            </Grid>{" "}
            {/* <Grid container xs={12}>
              <Grid xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Latitude"
                  variant="outlined"
                  type="number"
                  fullWidth
                  {...register("lat")}
                />
              </Grid>

              <Grid xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Longitude"
                  variant="outlined"
                  type="username"
                  fullwidth
                  {...register("lon")}
                />
              </Grid>
            </Grid>{" "}
            <Grid container xs={12}>
              <Grid xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Latitude"
                  variant="outlined"
                  type="number"
                  fullWidth
                  {...register("lat")}
                />
              </Grid>

              <Grid xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Longitude"
                  variant="outlined"
                  type="username"
                  fullwidth
                  {...register("lon")}
                />
              </Grid>
            </Grid> */}
            <Button variant="contained" type="submit">
              Log in
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default AddCityForm;
