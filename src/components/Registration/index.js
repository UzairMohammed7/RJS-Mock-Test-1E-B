import Header from '../Header'

import RegisterContext from '../../Context/RegisterContext'

import {
  ImageAndRegContainer,
  RegistrationContainer,
  RegHeading,
  RegImage,
  RegNowButton,
  Label,
  Input,
  Select,
  Options,
  ErrorMsg,
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

const Registration = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        username,
        activeTopic,
        changeName,
        changeTopic,
        registerName,
        errMsg,
        updateError,
      } = value

      const registerNow = event => {
        event.preventDefault()

        if (username !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <>
          <Header />
          <ImageAndRegContainer>
            <RegImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <RegistrationContainer onSubmit={registerNow}>
              <RegHeading>Let us join</RegHeading>
              <Label htmlFor="username">NAME</Label>
              <Input
                id="username"
                type="text"
                placeholder="Your name"
                value={username}
                onChange={onChangeName}
              />
              <Label htmlFor="topics">TOPICS</Label>
              <Select id="topics" value={activeTopic} onChange={onChangeTopic}>
                {topicsList.map(eachTopic => (
                  <Options key={eachTopic.id} value={eachTopic.id}>
                    {eachTopic.displayText}
                  </Options>
                ))}
              </Select>
              <RegNowButton type="submit">Register Now</RegNowButton>
              {errMsg && <ErrorMsg>Please enter your name</ErrorMsg>}
            </RegistrationContainer>
          </ImageAndRegContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Registration
