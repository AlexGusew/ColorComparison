import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import Grid from '@material-ui/core/Grid';

const SliderColor = ({ value, text, handleChange, min = 0, max = 100 }) => (
  <Grid>
    <Typography gutterBottom variant="subtitle2" component="h2">
      {text}
    </Typography>
    <Slider
      style={{ padding: '12px 0px' }}
      value={value}
      aria-labelledby="label"
      onChange={handleChange(text)}
      min={min}
      max={max}
    />
  </Grid>
);

export default SliderColor;