import { useMutation, useQuery } from "react-query";
import { Axios } from "../axios/axios";

function getPlace({queryKey}) {
  const [_, token] = queryKey;
  console.log(token);
  // console.log(Axios.post('/dashboard/login/'));
  return Axios.get("/dashboard/place-home/", {
    headers: {
      "Authorization": `Token ${token}`,
    },
  });
}

export default function useGetPlace(token) {
  return useQuery(["all_place",token], getPlace);
}
