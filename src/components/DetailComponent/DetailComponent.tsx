import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';

const DetailComponent = (props) => {

    const { open, element, handleClose, type} = props;
    
    const content = () => {
       if (type === 'people')
        return (<DialogContentText>
                    <Typography component={'span'}> Height: {element.height}</Typography><br/>
                    <Typography component={'span'}> Mass: {element.mass}</Typography><br/>
                    <Typography component={'span'}> Hair color: {element.hair_color}</Typography><br/>
                    <Typography component={'span'}> Skin color: {element.skin_color}</Typography><br/>
                    <Typography component={'span'}> Eye color: {element.eye_color}</Typography><br/>
                    <Typography component={'span'}> Birth year: {element.birth_year}</Typography><br/>
                </DialogContentText>)
        else return null;
    }

    return (
 
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
             <DialogTitle id="form-dialog-title">{element.name !== undefined ? element.name : element.title}</DialogTitle>
             <DialogContent>
                   {content()}

                   {element.rotation_period ? 'Rotation period: ' + element.rotation_period : null} <br/>
                   {element.orbital_period ? 'Orbital period: ' + element.orbital_period : null} <br/>
                   {element.diameter ? 'Diameter: ' + element.diameter : null} <br/>
                   {element.climate ? 'Climate: ' + element.climate : null} <br/>
                   {element.gravity ? 'Gravity: ' + element.gravity : null} <br/>
                   {element.terrain ? 'Terrain: ' + element.terrain : null} <br/>
                   {element.surface_water ? 'Surface water: ' + element.surface_water : null} <br/>
                   {element.population ? 'Population: ' + element.population : null} <br/>


                   {element.episode_id ? 'Episode ID: ' + element.episode_id : null} <br/>
                   {element.director ? 'Director: ' + element.director : null} <br/>
                   {element.opening_crawl ? 'Opening crawl: ' + element.opening_crawl : null} <br/>
                   {element.producer ? 'Producer: ' + element.producer : null} <br/>
                   {element.release_date ? 'Release date: ' + element.release_date : null} <br/> */}
                    

                 
             </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Back
                </Button>
              
            </DialogActions> 
              
      </Dialog>
    
    
    )
}

export default DetailComponent;