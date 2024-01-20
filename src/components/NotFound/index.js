import {NotFoundContainer, Heading, Desc, NotFoundImage} from './StyledComp'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Desc>We are sorry, the page you requested could not be found</Desc>
  </NotFoundContainer>
)

export default NotFound
