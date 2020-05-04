import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const AUTH_REQUEST_AND_SUCCESS = 'AUTH_REQUEST_AND_SUCCESS';

export const FETCH_RESOURCES_REQUEST = 'FETCH_RESOURCES_REQUEST';
export const FETCH_RESOURCES_SUCCESS = 'FETCH_RESOURCES_SUCCESS';
export const FETCH_RESOURCES_ERROR = 'FETCH_RESOURCES_ERROR';

export const FETCH_SPECIFIC_RESOURCE_REQUEST = 'FETCH_SPECIFIC_RESOURCE_REQUEST';
export const FETCH_SPECIFIC_RESOURCE_SUCCESS = 'FETCH_SPECIFIC_RESOURCE_SUCCESS';

const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const receiveLogin = (isAuthenticated, username) => {
    return {
        type: LOGIN_SUCCESS,
        isAuthenticated,
        username
    };
};

const loginError = message => {
    return {
        type: LOGIN_FAILURE,
        message
    };
};

const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    };
};

const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

const authenticateUser = () => {
    return {
        type: AUTH_REQUEST_AND_SUCCESS
    };
}

const fetchResourcesRequest = () => {
    return {
        type: FETCH_RESOURCES_REQUEST
    };
};

const fetchResourcesSuccess = resources => {
    return {
        type: FETCH_RESOURCES_SUCCESS,
        resources
    };
};

const fetchResourcesError = message => {
    return {
        type: FETCH_RESOURCES_ERROR,
        message
    };
};

const fetchSpecificResourceRequest = () => {
    return {
        type: FETCH_SPECIFIC_RESOURCE_REQUEST
    }
}


const fetchSpecificResourceSuccess = () => {
    return {
        type: FETCH_SPECIFIC_RESOURCE_SUCCESS
    }
}

export const loginUser = (username, password) => dispatch => {
    dispatch(requestLogin());
    login(username, password)
      .then(() => {dispatch(receiveLogin(true,username))
        localStorage.setItem('loggedIn',true);
        localStorage.setItem('username',username);
    })
      .catch(err => 
          dispatch(loginError(err)))        
};


function login(username, password) {
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            // var success = (username === 'skywalker96@gmail.com' && password === 'heismyfather');
            // success ? resolve : reject();
            var didSucceed = (username === 'skywalker96@gmail.com' && password === 'heismyfather');
       
            didSucceed ? resolve(true) : reject("These aren't the droids you're looking for...also, wrong username or password.");
            
        }, 2000)
    })
}

export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    logout()
     .then(dispatch(receiveLogout()))
}

function logout(username, password) {
    return new Promise((resolve,reject) => {
        localStorage.setItem('loggedIn',false);
        localStorage.setItem('username','');
        setTimeout( () => {
           
            resolve();
        }, 1000)
    })
}

export const authUser = () => dispatch => {
    dispatch(authenticateUser(localStorage.getItem('username')));
}

export const fetchResources = () => dispatch => {
    dispatch(fetchResourcesRequest());
    axios.get('https://swapi.dev/api', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
        }
    })
    .then(res => dispatch(fetchResourcesSuccess(res.data)))
    .catch(err => dispatch(fetchResourcesError('There was an error while fetching resources!' + err)));
}

export const fetchSpecificResource = () => dispatch => {
    dispatch(fetchSpecificResourceRequest());
    fetchData();
    
}

async function fetchData() {
    let data;
    let allData = [];
    let morePagesAvailable = true;
    let currentPage = 0;
  
     while(morePagesAvailable) {
      currentPage++;
      const response = await axios.get(`http://swapi.dev/api/people/?page=${currentPage}`)
    //   let { data, total_pages } = await response.json();
      data = await response.data;
      allData.push(data.results);
    //   data.forEach(e => allData.unshift(e));
      if (data.next === null)
       morePagesAvailable = false;
    //   morePagesAvailable = currentPage < total_pages;
     }
    console.log(allData);
    return allData;
  }