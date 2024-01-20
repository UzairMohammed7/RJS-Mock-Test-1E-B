import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Registration from './components/Registration'
import NotFound from './components/NotFound'

import RegisterContext from './Context/RegisterContext'

import './App.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {
    username: '',
    activeTopic: topicsList[0].id,
    isRegistered: false,
    errMsg: false,
  }

  changeName = username => {
    this.setState({username})
  }

  changeTopic = activeTopic => {
    this.setState({activeTopic})
  }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  updateError = () => {
    this.setState({errMsg: true})
  }

  render() {
    const {username, activeTopic, errMsg, isRegistered} = this.state
    return (
      <RegisterContext.Provider
        value={{
          username,
          activeTopic,
          errMsg,
          isRegistered,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Registration} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}
export default App
