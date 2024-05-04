import React from "react";
import Box from "@mui/material/Box";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { register, handleSubmit, reset, setError } = useForm();
  const { mutate, isLoading } = useLogin();
  const navigate = useNavigate();
  const handleLogin = (data) => {
    console.log(data);
    const { username, password } = data;
    const userData = {
      username: username,
      password: password,
    };
    mutate(userData, {
      onSuccess: (data) => {
        console.log(data);
        if (!data?.status) {
          let errorMessage = data?.message?.toLowerCase();
          setError(errorMessage);
          toast.error("Entered incorrect Credentials ");
          return;
        }

        localStorage.setItem(
          "loginData",
          JSON.stringify({ userName: data?.data?.name, token: data?.data?.token })
        );

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
      <div
        style={{
          height: "100vh",
          margin: "0px auto",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "teal",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            margin: "auto",
            width: "20rem",
            display: "flex",
            flexDirection: "row",
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            padding: 5,
            backgroundColor: "white",
          }}
        >
          <form onSubmit={handleSubmit(handleLogin)} style={{ width: "100%" }}>
            <Typography m={3} variant="h5">
              Welcome to Go Wild!!
            </Typography>
            <Stack spacing={3} m={3}>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                type="username"
                {...register("username")}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                {...register("password")}
              />
              <Button variant="contained" type="submit">
              {isLoading?'Logging...':'Log In'}
              </Button>
            </Stack>
          </form>
        </Box>
      </div>
    </>
  );
};

export default Login;
