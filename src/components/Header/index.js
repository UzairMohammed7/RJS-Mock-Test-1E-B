import {Navbar, WebsiteLogo, NavLink} from './StyledComp'

const Header = () => (
  <Navbar>
    <NavLink to="/">
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </NavLink>
  </Navbar>
)

export default Header
