import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk  from 'redux-thunk'
// reducers
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import user from './reducers/assignUser'
import newCookieCard from './reducers/newCookieCardForm'
import cookieCards from './reducers/cookieCards'
import categories from './reducers/cardTypes'


const reducers = combineReducers({
  user,
  loginForm,
  signupForm,
  newCookieCard,
  cookieCards,
  categories
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)) )

export default store
