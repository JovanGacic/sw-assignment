import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';


export const RenderFilms = (props) => {
  const { films, resourceFilter, handleClickOpen } = props;
  if (films.length === 0)
    return <CircularProgress color='primary' size={24} />;
  else return (
    <div>
      <h1>Films</h1>
      {resourceFilter.indexOf('films') === -1 ? null :
        films.map(element => {
          return (
            <Card key={element.title} variant="outlined">
              <CardContent>
                <Typography variant="body2" component="h2" align="left">
                  {element.title}
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