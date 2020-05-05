import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';

import { loginUser } from '../../actions';
import { authUser } from '../../actions';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff',
      
    },
    card: {
      marginTop: theme.spacing(10)
    },
    media: {
      height: '30px',
      paddingTop: '56.25%', // 16:9
      backgroundColor: 'rgba(0,0,0,1)'
    },
    errorText: {
      color:'red'
    }

  }),
);

const LoginComponent = (props) => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // const [helperText, setHelperText] = useState('');
  // const [error, setError] = useState(false);

  // const history = useHistory();
  const handleAuth = useCallback(() => {
    const { dispatch } = props;
    dispatch(authUser()); 
  },[props]);

  const {isAuthenticated, isLoggingIn, loginErrorMessage} = props;
  
  useEffect(() => {
    if (username.trim() && password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
    if (!isAuthenticated && localStorage.getItem('loggedIn') === 'true'){
        handleAuth();
    }
  }, [username, password, handleAuth, isAuthenticated]);

const handleLogin = (username, password) => {
    const {dispatch} = props;
    dispatch(loginUser(username,password));
}



  // const handleKeyPress = (e:any) => {
  //   if (e.keyCode === 13 || e.which === 13) {
  //     isButtonDisabled || handleLogin();
  //   }
  // };

  

  if (isAuthenticated) {
    return <Redirect to="/" />
  }
  else  
      return (
      
      <React.Fragment>
        <form className={classes.container} noValidate autoComplete="off">
          <Card className={classes.card}>
          <CardMedia
                className={classes.media}
                image={require("../../assets/star-wars-logo.png")}
                title="Star Wars"
              />
            <CardHeader className={classes.header} title="Fan App">
              
            </CardHeader>

            <CardContent>
              <div>
                <TextField
                 
                  fullWidth
                  id="username"
                  type="email"
                  label="Username"
                  placeholder="Username"
                  margin="normal"
                  onChange={(e)=>setUsername(e.target.value)}
                  // onKeyPress={(e)=>handleKeyPress(e)}
                />
                <TextField
                 
                  fullWidth
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  margin="normal"
                
                  onChange={(e)=>setPassword(e.target.value)}
                  // onKeyPress={(e)=>handleKeyPress(e)}
                />
              </div>
              <div className={classes.errorText}>
                 {isLoggingIn ? null : loginErrorMessage }
              </div>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                className={classes.loginBtn}
                onClick={()=>handleLogin(username,password)}
                disabled={isButtonDisabled}
                >
               {isLoggingIn ? <CircularProgress color="inherit" size={24}/> : 'Log in'}
              </Button>
            </CardActions>
          </Card>
        </form>
      </React.Fragment>
    );
  }

  function mapStateToProps(state){
    return {
      isLoggingIn: state.auth.isLoggingIn,
      // loginError: state.auth.loginError,
      isAuthenticated: state.auth.isAuthenticated,
      loginErrorMessage: state.auth.loginErrorMessage,
    };
  }
  
  export default connect(mapStateToProps)(LoginComponent);