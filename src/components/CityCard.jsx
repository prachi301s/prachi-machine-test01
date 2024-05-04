import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
function CityCard({cityName,total_place}) {
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           {cityName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Total Place : {total_place}
          </Typography>
        </CardContent>
      
      </Box>
     
    </Card>
  );
}
export default CityCard;
