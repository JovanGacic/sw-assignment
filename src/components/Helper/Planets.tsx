import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogContentText from '@material-ui/core/DialogContentText';

export const RenderPlanets = (props) => {

    const { planets, resourceFilter, handleClickOpen } = props; 

    if (planets.length === 0)
      return <CircularProgress color='primary' size={24}/>;
    return (
      <div>
         <h1>Planets</h1>
        {resourceFilter.indexOf('planets') === -1 ? null :
        planets.map(element => {
         return (  
           <Card key={element.name} variant="outlined">
              <CardContent>
                <Typography variant="body2" component="h2" align="left">
                  {element.name}
                  <Button style={{float:"right"}} variant="contained"
                         size="medium"
                         color="primary"
                         onClick={() => handleClickOpen(element)}>
                   Details
                </Button>
                </Typography>
              </CardContent>
            </Card>
        )})
        }
      </div>
    ) 
  }

  export const ContentPeople = (props) => {

    const { element } = props;
  
    return (
      <DialogContentText>
        <Typography component={'span'}> Height: <b>{element.rotation_period}</b></Typography><br />
        <Typography component={'span'}> Mass: <b>{element.orbital_period}</b></Typography><br />
        <Typography component={'span'}> Hair color: <b>{element.diameter}</b></Typography><br />
        <Typography component={'span'}> Skin color: <b>{element.climate}</b></Typography><br />
        <Typography component={'span'}> Eye color: <b>{element.gravity}</b></Typography><br />
        <Typography component={'span'}> Birth year: <b>{element.terrain}</b></Typography><br />
      </DialogContentText>
    )
  
  }