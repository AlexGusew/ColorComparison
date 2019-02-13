import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';

const SliderColor = ({ value, text, handleChange, min = 0, max = 100 }) => {
  const isError = () => value < min || value > max;

  return (
    <Grid>
      <Typography gutterBottom variant="subtitle2" component="h2">
        {text}
      </Typography>
      <Grid container justify='center' alignItems='center' wrap='nowrap'>
        <Slider
          style={{ padding: '12px 0px' }}
          value={Math.round(value * 100) / 100}
          aria-labelledby="label"
          onChange={handleChange(text)}
          min={min}
          max={max}
        />
        <TextField
          value={Math.round(value * 100) / 100}
          onChange={handleChange(text)}
          margin="none"
          style={{ marginLeft: 20 }}
          type="number"
          error={isError()}
          helperText={isError() ? "Invalid value" : ' '}
          
        />
      </Grid>
    </Grid>
  );
}

export default SliderColor;