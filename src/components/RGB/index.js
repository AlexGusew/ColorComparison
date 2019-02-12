import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SliderColor from '../SliderColor';
import { types } from '../utls';

const styles = {
  card: {
    width: 345,
    margin: 20,
  },
  media: {
    height: 140,
  }
};

const RGB = ({ classes, R, G, B, handleChange: _handleChange }) => {
  const handleChange = _handleChange({ type: types.RGB, data: { R, G, B } });

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        style={{ background: `rgb(${R},${G},${B})` }}
        image={'none'}
        title="RGB"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          RGB
      </Typography>
        <SliderColor min={0} max={255} handleChange={handleChange} value={R} text={'R'} />
        <SliderColor min={0} max={255} handleChange={handleChange} value={G} text={'G'} />
        <SliderColor min={0} max={255} handleChange={handleChange} value={B} text={'B'} />
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(RGB);