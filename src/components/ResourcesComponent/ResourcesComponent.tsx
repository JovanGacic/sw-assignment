import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { fetchResources } from '../../actions';

import { RenderFilters } from '../Helper/Filters';
import { RenderResources } from '../Helper/RenderResources';
import DetailComponent from '../DetailComponent/DetailComponent';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  search: {
    margin: 'auto',
    marginTop: '10px',
    marginBottom: '10px'
  },
  searchField: {
  },
  searchBtn: {
    width: '30%'

  },
  listContainer: {
    margin: 'auto',
    width: '50%'
  },
  form: {
    '& > *': {
      width: 200,
    }
  }
});

const ResourcesComponent = (props) => {

  let { people, planets, films, species, vehicles, starships,
    resources, fetchResourcesError
  } = props;

  let inputRef;

  const classes = useStyles();
  const [resourceFilter, setResourceFilter] = useState(['people', 'starships', 'films', 'planets', 'species', 'vehicles']);
  const [searchString, setSearchString] = useState('');
  const [element, setElement] = useState({});
  const [open, setOpen] = useState(false);

  const handleClickOpen = (element) => {
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

  useEffect(() => {
    getResources();
  }, []);

  return (
    <div className={classes.container}>
      <div >
        <h3>Filters:</h3>
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
          inputRef={ref => inputRef = ref}
        >

        </TextField>
        <Button variant="contained"
          size="small"
          color="primary"
          className={classes.searchBtn}
          onClick={() => handleSearchChange(inputRef.value)}>Search</Button>
      </div>
      {fetchResourcesError ?
        (<div>
          <h3>500 {fetchResourcesError}</h3>
        </div>)
        :
        (<div className={classes.listContainer}>
          <RenderResources data={people} resourceFilter={resourceFilter} handleClickOpen={handleClickOpen} searchString={searchString} type="people" />
          <RenderResources data={planets} resourceFilter={resourceFilter} handleClickOpen={handleClickOpen} searchString={searchString} type="planets" />
          <RenderResources data={films} resourceFilter={resourceFilter} handleClickOpen={handleClickOpen} searchString={searchString} type="films" />
          <RenderResources data={species} resourceFilter={resourceFilter} handleClickOpen={handleClickOpen} searchString={searchString} type="species" />
          <RenderResources data={vehicles} resourceFilter={resourceFilter} handleClickOpen={handleClickOpen} searchString={searchString} type="vehicles" />
          <RenderResources data={starships} resourceFilter={resourceFilter} handleClickOpen={handleClickOpen} searchString={searchString} type="starships" />
        </div>)}
      <DetailComponent element={element} open={open} handleClose={handleClose} searchString={searchString} />
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
    vehicles: state.resources.vehicles,
    fetchResourcesError: state.resources.fetchResourcesError
  }
}

export default connect(mapStateToProps)(ResourcesComponent);