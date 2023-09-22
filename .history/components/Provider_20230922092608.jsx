import React from 'react'
import {SessionProvider} from 'next-auth/react'

const Provider = () => {
  const Provider = ({children,session})=>{
return (
  <SessionProvider se>{children}</SessionProvider>
)
  }
}

export default Provider