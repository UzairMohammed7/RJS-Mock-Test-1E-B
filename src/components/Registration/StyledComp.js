import styled from 'styled-components'

export const ImageAndRegContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const RegistrationContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 290px;
  width: 40%;
`

export const RegHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  margin-bottom: 10px;
`
export const Label = styled.label`
  color: #475569;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  margin-top: 10px;
`
export const Input = styled.input`
  outline: none;
  color: #475569;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  padding: 8px;
  width: 240px;
`
export const Select = styled.select`
  outline: none;
  font-family: 'Roboto';
  font-size: 14px;
  padding: 8px;
  width: 240px;
`
export const Options = styled.option``

export const RegNowButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px;
  margin-top: 10px;
  border-radius: 6px;
  width: 120px;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: bold;
`
export const RegImage = styled.img`
  height: 400px;
  margin-top: 20px;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  margin-top: 0;
`
