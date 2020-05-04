import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    search: {
        marginTop: '10px'
    }
})


const DetailComponent = (props) => {

const classes = useStyles();
const {resource, resourceUrl} = props;
const [searchString, setSearchString ] = useState('');

const handleSearch = (str) => {
    setSearchString(str)
}

const handleClick = () => {
    console.log(searchString);
}
//setSearchString
    return (
        <div>
            <h1>{resource}</h1>
            {resourceUrl}
            <div className={classes.search}>
                <TextField
                    size="medium"
                    id="search"
                    label="Search"
                    placeholder="Type something here..."
                    margin="normal"
                    onChange={(e)=>handleSearch(e.target.value)}
                >
                {searchString}   
                </TextField>
                <Button  
                    variant="contained"
                    size="large"
                    color="secondary"
                    onClick={()=>handleClick()}>Search</Button>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
    }
  }
  
  export default connect(mapStateToProps)(DetailComponent);