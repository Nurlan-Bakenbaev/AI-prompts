import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {signIn,signOut,useSession} from 'next-auth/react'
const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href={'/'} className='flex gap-2'>
        <Image src="/ass"/>
      </Link>
       </nav>
  )
}

export default Nav