import React from 'react'

const RegisterContext = React.createContext({
  username: '',
  changeName: () => {},
  activeTopic: '',
  changeTopic: () => {},
  isRegistered: false,
  registerName: () => {},
  errMsg: false,
  updateError: () => {},
})

export default RegisterContext
