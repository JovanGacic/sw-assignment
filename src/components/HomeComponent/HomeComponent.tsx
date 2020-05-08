import React from 'react';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { logoutUser } from '../../actions';
import ResourcesComponent from '../ResourcesComponent/ResourcesComponent';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    button: {
        marginTop: '1%',
        marginRight: '1%'
    }
})

const HomeComponent = (props) => {

    const classes = useStyles();

    const handleLogout = () => {
        const { dispatch } = props;
        dispatch(logoutUser());
    }

    return (
        <div>
            <div className={classes.header}>
                <Button className={classes.button}
                    variant="contained"
                    size="medium"
                    color="primary"
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