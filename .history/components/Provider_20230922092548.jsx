import React from 'react'
import {SessionProvider} from 'next-auth/react'

const Provider = () => {
  const Provider = ({children,session})=>{
return (
  <SessionProvider>{}</SessionProvider>
)
  }
}

export default Provider