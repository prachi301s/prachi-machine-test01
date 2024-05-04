import { useMutation } from "react-query";
import { Axios } from "../axios/axios";


function handleLogin(user) {
  console.log(user)
// console.log(Axios.post('/dashboard/login/'));
  return Axios.post("/dashboard/login/", user);
}

export default function useLogin() {
  return useMutation(handleLogin);
}
