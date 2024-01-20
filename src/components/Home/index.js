import Header from '../Header'

import RegisterContext from '../../Context/RegisterContext'

import {
  HeadingName,
  WelcomeText,
  HomeContainer,
  Heading,
  Text,
  RegButton,
  NavLink,
  MeetupImage,
} from './StyledComp'

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

const Home = props => {
  const register = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {username, activeTopic, isRegistered} = value

        let usersTopic
        const topic = topicsList.find(e => e.id === activeTopic)
        console.log(topic)
        if (topic.id === activeTopic) {
          usersTopic = topic.displayText
          console.log(usersTopic)
        }

        return (
          <>
            <Header />
            {isRegistered ? (
              <HomeContainer>
                <HeadingName>Hello {username}</HeadingName>
                <WelcomeText>Welcome to {usersTopic}</WelcomeText>
                <MeetupImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <Heading>Welcome to Meetup</Heading>
                <Text>Please register for the topic</Text>
                <NavLink to="/register">
                  <RegButton onClick={register}>Register</RegButton>
                </NavLink>
                <MeetupImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
