import './App.css'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Component} from 'react'

import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import Differentcontext from './context'
import Clickedcard from './components/Clickedcard'
import Savedvideos from './components/Savedvideos'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here

class App extends Component {
  state = {
    backColor: false,
    saveddata: [],
    savedbutton: false,
  }

  togglebackground = () => {
    const {backColor} = this.state
    this.setState(prevState => ({
      backColor: !prevState.backColor,
    }))
  }

  clickingonsave = newData => {
    const {saveddata, savedbutton} = this.state

    const index = saveddata.findIndex(eachVideo => eachVideo.id === newData.id)
    if (index === -1) {
      this.setState(prevState => ({
        saveddata: [...prevState.saveddata, newData],
      }))
    } else {
      saveddata.splice(index, 1)
      this.setState({saveddata})
    }
  }

  render() {
    const {backColor, togglebackground, saveddata, savedbutton} = this.state
    console.log(saveddata)
    return (
      <Differentcontext.Provider
        value={{
          backColor,
          savedbutton,
          saveddata,
          togglebackground: this.togglebackground,
          clickingonsave: this.clickingonsave,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={Clickedcard} />
          <ProtectedRoute exact path="/savedvideos" component={Savedvideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </Differentcontext.Provider>
    )
  }
}

export default App
