import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
  root: {
    width: '40%',
    marginLeft: '1%',
    marginBottom: '1%',
  },
  master: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    margin: 'auto'
  },
  action: {
    justifyContent: 'center'
  }
});

export const RenderFilters = (props) => {

  const classes = useStyles();

  const { resources, resourceFilter, setResourceFilter } = props;

  const handleFilter = key => {
    if (resourceFilter.indexOf(key) === -1)
      setResourceFilter([
        ...resourceFilter,
        key
      ])
    else
      setResourceFilter(resourceFilter.filter((e) => (e !== key)));

  }

  const [toggle, setToggle] = useState({
    people: true,
    starships: true,
    planets: true,
    films: true,
    species: true,
    vehicles: true
  });

  const handleChange = (event) => {
    setToggle({ ...toggle, [event.target.name]: event.target.checked });
    handleFilter(event.target.name);
  };

  return (
    <div className={classes.master + " switcher-container"}>
      {Object.keys(resources).map((key, index) => {
        return (
          <Card key={index} className={classes.root} variant="outlined">
            <CardContent>
              <Typography className="title switcher" variant="h5" component="h2">
                {key}
              </Typography>
            </CardContent>
            <CardActions className={classes.action}>
              <Switch
                checked={toggle[key]}
                onChange={(event) => handleChange(event)}
                color="primary"
                name={key}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </CardActions>
          </Card>
        )
      })}
    </div>
  )
}