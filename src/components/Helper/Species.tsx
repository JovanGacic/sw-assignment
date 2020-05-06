import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';


export const RenderSpecies= (props) => {
    const { species, resourceFilter, handleClickOpen } = props; 
    if (
      species.length === 0)
      return <CircularProgress color='primary' size={24}/>;
    return (
      <div>
        <h1>Species</h1>
        {resourceFilter.indexOf('species') === -1 ? null :
        species.map(element => {
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