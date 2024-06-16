"use client"

import React, { useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image';

function Header() {

  const router = useRouter();

  const [pokeName, setPokeName] = useState("");

  console.log(pokeName)

  const handleInput = (e) => {
      setPokeName(e.target.value);
  }

  const handleForm = (e) => {
      e.preventDefault();

      router.push(`/pokesearch/${pokeName}`);
  }
  return (
    <header className='bg-gradient-to-r from-indigo-700 via-purple-400 to-rose-500 h-[300px] flex justify-center items-center'>
        <div className='text-center'>
            <h1 className='text-black text-5xl'>Pokemon</h1>
            <p className='text-black text-2xl'>Find your Pokemon</p>
            <form onSubmit={handleForm} className='flex mt-2'>
                <input 
                type="text" 
                className='w-full rounded-md border-gray-300 px-3 py-2 text-gray-700 shadow-md'
                placeholder='Pokemon Name...'
                onChange={handleInput}
                />
                <button className='inline-flex items-center mx-2 px-4 py-2 rounded-md bg-blue-500 txet-white shadow-md' type='submit'>Search</button>
            </form>

        </div>
        
    </header>
  )
}

export default Header