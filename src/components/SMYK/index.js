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

const SMYK = ({ classes, C, M, Y, K, handleChange: _handleChange, R, G, B }) => {
  const handleChange = _handleChange({ type: types.CMYK, data: { C, M, Y, K } });

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        style={{ background: `rgb(${R},${G},${B})` }}
        title="CMYK"
        image={'none'}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          CMYK
      </Typography>
        <SliderColor handleChange={handleChange} min={0} max={1} value={C} text={'C'} />
        <SliderColor handleChange={handleChange} min={0} max={1} value={M} text={'M'} />
        <SliderColor handleChange={handleChange} min={0} max={1} value={Y} text={'Y'} />
        <SliderColor handleChange={handleChange} min={0} max={1} value={K} text={'K'} />
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(SMYK);