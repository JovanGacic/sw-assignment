import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import DetailComponent from '../DetailComponent/DetailComponent';


import { fetchResources } from '../../actions';
import { fetchSpecificResource } from '../../actions';

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
      flexDirection: 'row',
      
     },
   column : {
        flex: '30%',
      },
    master: {
      width: '100%'
    },
    detail: {
      border: '1px solid rgba(0, 0, 0, 0.12)',
      borderRadius:'4px',
      width: '90%'
    }
 });

const ResourcesComponent = (props) => {

const classes = useStyles();
const [resource, setResource] = useState('');
const [resourceUrl, setResourceUrl] = useState('');


useEffect(() => {
    getResources();
    }, []);


const getResources = () => {
        const { dispatch } = props;
        dispatch(fetchResources()); 
}

const getSpecificResource = () => {
  const { dispatch } = props;
  dispatch(fetchSpecificResource()); 
}

const handleClick = (key:string, url:string) => {
  setResource(key);
  setResourceUrl(url);
  getSpecificResource();
}

const renderData = () => {
    const { resources } = props; 
    return (
        <div>
        {Object.keys(resources).map((key,index) => {
        return (
            <Card key={index} className={classes.root} variant="outlined">
              <CardContent>
              <Typography variant="h5" component="h2">
                  {key}
                </Typography>
              </CardContent>
            <CardActions className={classes.action}>
              <Button onClick={() => handleClick(key, resources[key])} variant='outlined' size="small">Find out more...</Button>
            </CardActions>
          </Card>
        )
        })}
        </div>
    )
  }


    return ( 
      <div className={classes.container}>
        <div className={classes.column}>
          <div className={classes.master}>
            {renderData()}
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.detail}>
            <DetailComponent resource={resource} resourceUrl={resourceUrl}/>
          </div>
        </div>
      </div>        
    )
 }




 function mapStateToProps(state){
    return {
        resources: state.resources.resources,
    }
  }
  
  export default connect(mapStateToProps)(ResourcesComponent);