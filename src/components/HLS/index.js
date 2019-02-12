import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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

const HLS = ({ classes, H, L, S, handleChange: _handleChange, R, G, B }) => {
  const handleChange = _handleChange({ type: types.HLS, data: { H, S, L } });

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        style={{ background: `rgb(${R},${G},${B})` }}
        title="HLS"
        image={'none'}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          HLS
      </Typography>
        <SliderColor handleChange={handleChange} min={0} max={360} value={H} text={'H'} />
        <SliderColor handleChange={handleChange} min={0} max={1} value={L} text={'L'} />
        <SliderColor handleChange={handleChange} min={0} max={1} value={S} text={'S'} />
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Just set max mark ;)
        </Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(HLS);