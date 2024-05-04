import { useMutation } from "react-query";
import { Axios } from "../axios/axios";

function handleCityData(cityData) {
  const {
    country,
    city_id,
    lat,
    lon,
    name,
    rating,
    state,
    zip_code,
    description,
    views_count,
    is_verified,
    is_active,
    tags,
    activities,
  } = cityData;
  let token =cityData.token;
console.log(token)
  const addCityData = {
    country:country,
    city_id,
    lat:lat,
    lon:lon,
    name:name,
    rating:rating,
    state,
    zip_code,
    description,
    views_count,
    is_verified,
    is_active,
    tags,
    activities,
  };
  console.log(addCityData);
 
  return Axios.post(
    "/data/city/",
    addCityData,
    {
      headers: {
        "Authorization": `Token ${token}`,
      },
    }
  );
}

export default function useAddCity() {
  return useMutation(handleCityData);
}
