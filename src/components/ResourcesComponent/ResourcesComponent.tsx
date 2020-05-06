import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { fetchResources } from '../../actions';

import { RenderFilters } from '../Helper/Filters';
import { RenderPeople } from '../Helper/People';
import { RenderPlanets } from '../Helper/Planets';
import { RenderFilms } from '../Helper/Films';
import { RenderSpecies } from '../Helper/Species';
import { RenderVehicles } from '../Helper/Vehicles';
import { RenderStarships } from '../Helper/Starships';
import DetailComponent from '../DetailComponent/DetailComponent';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
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
  }
});

const ResourcesComponent = (props) => {

  const { people, planets, films, species, vehicles, starships,
    resources
  } = props;

  const classes = useStyles();
  const [resourceFilter, setResourceFilter] = useState(['people', 'starships', 'films', 'planets', 'species', 'vehicles']);
  const [searchString, setSearchString] = useState('');
  const [element, setElement] = useState({});
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (element, type) => {
    setElement(element);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getResources = () => {
    const { dispatch } = props;
    dispatch(fetchResources());
  }
  
  const handleSearchChange = (str) => {
    setSearchString(str)
  }

  const handleSearch = () => {
    console.log(searchString)
  }

  useEffect(() => {
    getResources();
  }, []);

  return (
    <div className={classes.container}>
      <div >
        <RenderFilters resources={resources}
          resourceFilter={resourceFilter}
          setResourceFilter={setResourceFilter}
        />
      </div>

      <div className={classes.search}>
        <TextField className={classes.searchField}
          size="medium"
          id="search"
          label="Search"
          placeholder="Type something here..."
          margin="normal"
          onBlur={(e) => handleSearchChange(e.target.value)}
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
        <RenderPeople people={people} resourceFilter={resourceFilter} handleClickOpen={handleClickOpen} />
        <RenderPlanets planets={planets} resourceFilter={resourceFilter} handleClickOpen={handleClickOpen} />
        <RenderFilms films={films} resourceFilter={resourceFilter} handleClickOpen={handleClickOpen} />
        <RenderSpecies species={species} resourceFilter={resourceFilter} handleClickOpen={handleClickOpen} />
        <RenderVehicles vehicles={vehicles} resourceFilter={resourceFilter} handleClickOpen={handleClickOpen} />
        <RenderStarships starships={starships} resourceFilter={resourceFilter} handleClickOpen={handleClickOpen} />
      </div>
      <DetailComponent element={element} open={open} handleClose={handleClose} />
    </div>
  )
}


function mapStateToProps(state) {
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