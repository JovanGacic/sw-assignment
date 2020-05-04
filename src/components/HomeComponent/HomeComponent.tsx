import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { connect } from 'react-redux';

import { Button } from '@material-ui/core';
import { logoutUser } from '../../actions';

import ResourcesComponent  from '../ResourcesComponent/ResourcesComponent';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//   }
// );


const HomeComponent = (props) => {

// const {isAuthenticated} = props;
//const classes = useStyles();

const handleLogout = () => {
        const { dispatch } = props;
        dispatch(logoutUser()); 
}


    
    return (
        <div>
            <Button onClick={handleLogout}>Logout</Button>
            <ResourcesComponent />
        </div>
    )
 }


 function mapStateToProps(state){
    return {
        isAuthenticated: state.auth.isAuthenticated,
    }
  }
  
  export default connect(mapStateToProps)(HomeComponent);