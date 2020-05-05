import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { connect } from 'react-redux';

import { Button } from '@material-ui/core';
import { logoutUser } from '../../actions';

import ResourcesComponent from '../ResourcesComponent/ResourcesComponent';

const HomeComponent = (props) => {

    const handleLogout = () => {
        const { dispatch } = props;
        dispatch(logoutUser());
    }

    return (
        <div>
            <div style={{backgroundColor:'#3f51b5', marginBottom:"1%"}}>
                <Button
                    variant="text"
                    size="large"
                    color="default"
                    onClick={handleLogout}>Logout</Button>
            </div>
            <h1>Star Wars Fan App</h1>
            <ResourcesComponent />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    }
}

export default connect(mapStateToProps)(HomeComponent);