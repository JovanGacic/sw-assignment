import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import DetailComponent from '../DetailComponent/DetailComponent';
import { fetchResources } from '../../actions';



const useStyles = makeStyles({
    root: {
      width: '40%',
      marginLeft:'1%',
      marginBottom: '1%',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    action: {
      justifyContent: 'center'
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      
     },
   column : {
        // flex: '30%',
      
      },
    master: {
       width: '80%',
      display: 'flex',
      flexDirection: 'row',
      margin: 'auto'
    },
    detail: {
      border: '1px solid rgba(0, 0, 0, 0.12)',
      borderRadius:'4px',
      width: '90%'
    },
    search: {
      marginTop: '10px',
    },
    searchField: {
     
    },
    searchBtn: {

  },
    listContainer: {
      margin: 'auto',
      width: '50%'
    },
    list: {
      width: '100%'
    }
 });

const ResourcesComponent = (props) => {

const classes = useStyles();
const [resourceFilter, setResourceFilter] = useState(['people','starships','films','planets','species','vehicles']);
const [searchString, setSearchString ] = useState('');
const [element, setElement] = useState({});
const [type, setType] = useState('');

const [open, setOpen] = React.useState(false);

const handleClickOpen = (element,type) => {
  setElement(element);
  setOpen(true);
  setType(type);
};

const handleClose = () => {
  setOpen(false);
};

const getResources = () => {
  const { dispatch } = props;
  dispatch(fetchResources()); 
}


useEffect(() => {
    getResources();
  
    }, []);

const handleSearchChange = (str) => {
  setSearchString(str)
}

const handleSearch = () => {
  console.log(searchString)
}

const handleFilter = key => {
  if(resourceFilter.indexOf(key) === -1)
  setResourceFilter([
    ...resourceFilter,
    key
  ])
  else
  setResourceFilter(resourceFilter.filter((e)=>(e !== key)));

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

const renderData = () => {
    const { resources } = props; 
    return (
        <div className={classes.master}>
        {Object.keys(resources).map((key,index) => {
        return (
            <Card key={index} className={classes.root} variant="outlined">
              <CardContent>

              <Typography variant="h5" component="h2">
                  {key}
                </Typography>
              </CardContent>
             <CardActions className={classes.action}>
               {/* <Button onClick={() => handleFilter(key)} variant='outlined' size="small">Filter</Button>  */}
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



  const renderPeople = () => {
    const { people } = props; 
    if (people.length === 0)
      return <CircularProgress color='primary' size={24}/>;
    return (
      <div>
        <h1>People</h1>
        {resourceFilter.indexOf('people') === -1 ? null : 
        people.map(element => {
         return (  
           <Card key={element.name} className={classes.list} variant="outlined">
              <CardContent>
                <Typography variant="body2" component="h2" align="left">
                  {element.name}
                  <Button style={{float:"right"}} variant="contained"
                         size="medium"
                         color="primary"
                         onClick={() => handleClickOpen(element,'people')}>
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

  const renderStarships = () => {
    const { starships } = props; 
    if (starships.length === 0)
      return <CircularProgress color='primary' size={24}/>;
    return (
      <div>
        <h1>Starships</h1>
        {resourceFilter.indexOf('starships') === -1 ? null :
        starships.map(element => {
         return (  
           <Card key={element.name} className={classes.list} variant="outlined">
              <CardContent>
                
                <Typography variant="body2" component="h2" align="left">
                  {element.name}
                  <Button style={{float:"right"}} variant="contained"
                         size="medium"
                         color="primary"
                         onClick={() => handleClickOpen(element,'starships')}>
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

  const renderFilms= () => {
    const { films } = props; 
    if (
      films.length === 0)
      return <CircularProgress color='primary' size={24}/>;
    else return (
      <div>
        <h1>Films</h1>
        {resourceFilter.indexOf('films') === -1 ? null :
        films.map(element => {
         return (  
           <Card key={element.title} className={classes.list} variant="outlined">
              <CardContent>
                <Typography variant="body2" component="h2" align="left">
                  {element.title}
                  <Button style={{float:"right"}} variant="contained"
                         size="medium"
                         color="primary"
                         onClick={() => handleClickOpen(element,'films')}>
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

  const renderPlanets= () => {
    const { planets } = props; 
    if (planets.length === 0)
      return <CircularProgress color='primary' size={24}/>;
    return (
      <div>
         <h1>Planets</h1>
        {resourceFilter.indexOf('planets') === -1 ? null :
        planets.map(element => {
         return (  
           <Card key={element.name} className={classes.list} variant="outlined">
              <CardContent>
               
                <Typography variant="body2" component="h2" align="left">
                  {element.name}
                  <Button style={{float:"right"}} variant="contained"
                         size="medium"
                         color="primary"
                         onClick={() => handleClickOpen(element,'planets')}>
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

  const renderSpecies= () => {
    const { species } = props; 
    if (
      species.length === 0)
      return <CircularProgress color='primary' size={24}/>;
    return (
      <div>
        <h1>Species</h1>
        {resourceFilter.indexOf('species') === -1 ? null :
        species.map(element => {
         return (  
           <Card key={element.name} className={classes.list} variant="outlined">
              <CardContent>
              
                <Typography variant="body2" component="h2" align="left">
                  {element.name}
                  <Button style={{float:"right"}} variant="contained"
                         size="medium"
                         color="primary"
                         onClick={() => handleClickOpen(element,'species')}>
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

  const renderVehicles = () => {
    const { vehicles } = props; 
    if (
      vehicles.length === 0)
      return <CircularProgress color='primary' size={24}/>;
    return (
      <div>
        <h1>Vehicles</h1>
        {resourceFilter.indexOf('vehicles') === -1 ? null :
        vehicles.map(element => {
         return (  
           <Card key={element.name} className={classes.list} variant="outlined">
              <CardContent>
                <Typography variant="body2" component="h2" align="left">
                  {element.name}
                  
                </Typography><Button style={{float:"right"}} variant="contained"
                         size="medium"
                         color="primary"
                         onClick={() => handleClickOpen(element,'vehicles')}>
                   Details
                </Button>
              </CardContent>
            </Card>
        )})
        }
      </div>
    ) 
  }

  

    return ( 
      <div className={classes.container}> 
          <div >
            {renderData()}
          </div>
         
            <div className={classes.search}>
                <TextField className={classes.searchField}
                    size="medium"
                    id="search"
                    label="Search"
                    placeholder="Type something here..."
                    margin="normal"
                    onBlur={(e)=>handleSearchChange(e.target.value)}
                >
                {searchString}   
                </TextField>
                <Button className={classes.searchBtn}
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={() => handleSearch()}>
                      Search
                </Button>
            </div>
          <div className={classes.listContainer}>
            <div>
               {renderPeople()}
            </div>
            <div className={classes.list}>
              {renderPlanets()}
            </div>
            <div className={classes.list}>
              {renderFilms()}
            </div>
            <div className={classes.list}>
              {renderSpecies()}
            </div>
            <div className={classes.list}>
              {renderVehicles()}
            </div>
            <div className={classes.list}>
              {renderStarships()}
            </div>
          </div>
          <DetailComponent element={element} type={type} open={open} handleClose={handleClose}/>
      </div>        
    )
 }


 function mapStateToProps(state){
    return {
        resources: state.resources.resources,
        people: state.resources.people,
        starships: state.resources.starships,
        planets: state.resources.planets,
        films: state.resources.films,
        species: state.resources.species,
        vehicles: state.resources.vehicles
    }
  }
  
  export default connect(mapStateToProps)(ResourcesComponent);