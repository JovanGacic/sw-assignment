import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    btn: {
       float: "right" 
}
 });

export const RenderResources = (props) => {

  const classes = useStyles();

  let { data, resourceFilter, handleClickOpen, searchString, type } = props;

  const fuzzy = (obj) => {
   const result = Object.keys(obj).some(key => {
      if(!Array.isArray(obj[key]) && obj[key] !== null && obj[key].length < 600) {
          //console.log(obj[key] || ''.toUpperCase());
     return obj[key].toUpperCase().indexOf(searchString.toUpperCase()) > -1
    } 
      else return false;
  })
    return result;
  }

  data = searchString ? data.filter(a => (fuzzy(a))) : data

  if (data.length === 0 && searchString === '')
    return <CircularProgress color='primary' size={24} />;
  return (
    <div>
      <h1>{type}</h1>
      {resourceFilter.indexOf(type) === -1 ? null :
        data.map(element => {
          return (
            <Card key={element.name ? element.name : element.title} variant="outlined">
              <CardContent>
                <Typography variant="body2" component="h2" align="left">
                  {element.name ? element.name : element.title}
                  <Button className={classes.btn} variant="contained"
                    size="medium"
                    color="primary"
                    onClick={() => handleClickOpen(element)}>
                    Details
                </Button>
                </Typography>
              </CardContent>
            </Card>
          )
        })
      }
    </div>
  )
}


