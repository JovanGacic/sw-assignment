import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

export const RenderPeople = (props) => {


  const { people, resourceFilter, handleClickOpen } = props;

  if (people.length === 0)
    return <CircularProgress color='primary' size={24} />;
  return (
    <div>
      <h1>People</h1>
      {resourceFilter.indexOf('people') === -1 ? null :
        people.map(element => {
          return (
            <Card key={element.name} variant="outlined">
              <CardContent>
                <Typography variant="body2" component="h2" align="left">
                  {element.name}
                  <Button style={{ float: "right" }} variant="contained"
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


