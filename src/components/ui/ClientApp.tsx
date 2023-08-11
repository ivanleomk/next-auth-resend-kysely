"use client"
import React from 'react'

const ClientApp = () => {
  const [state, setState] = React.useState(0)
  return (
    <button onClick={() => {
      setState(state + 1)
    }}>Increase Count - {state}</button>
  )
}

export default ClientApp