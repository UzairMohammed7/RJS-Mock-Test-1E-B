import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const HomeContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HeadingName = styled.h1`
  color: #2563eb;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 45px;
  margin-bottom: 10px;
`
export const Heading = styled.h1`
  color: #334155;
  font-weight: bold;
  font-family: 'Roboto';
  margin-bottom: 10px;
`
export const WelcomeText = styled.p`
  color: #334155;
  font-weight: bold;
  margin-top: 5px;
  font-family: 'Roboto';
  font-size: 23px;
`
export const Text = styled.p`
  color: #475569;
  margin-top: 10px;
  font-family: 'Roboto';
  font-size: 16px;
`
export const RegButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px;
  border-radius: 4px;
  width: 80px;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: bold;
`
export const MeetupImage = styled.img`
  height: 400px;
  margin-top: 20px;
`
