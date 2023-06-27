import React from 'react'

const Differentcontext = React.createContext({
  backColor: false,
  savedbutton: false,
  saveddata: [],
  togglebackground: () => {},
  clickingonsave: () => {},
})

export default Differentcontext
