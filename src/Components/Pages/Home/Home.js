import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Cards from '../../Cards/Cards';

function Home() {
  const [Countries, setCountries] = useState([])
  const [mode, setMode] = useState(true)
  const [togglebtn, setTogglebtn] = useState('<i class="far fa-sun"></i> Light Mode')

  const getCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all')
    const data = await res.json()
    console.log(data)
    //await setCountries(data)
  }
  //console.log(data)

  const toggleDarkMode = () => {
    if(mode)  {
      document.documentElement.classList.add('dark')
      setTogglebtn('<i class="fas da-moon"></i> Dark Mode')
      setMode(current => current = !current)
    }
    if(!mode) {
      document.documentElement.classList.remove('dark')
      setTogglebtn('<i class="fas da-sun"></i> Light Mode')
      setMode(current => current =!current)
    }
  }

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <body className='bg-gray-100 dark:bg-gray-800 dark:text-white'>
      <div className='w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16'>
        <div className='flex container mx-auto'>
          <h1 className='font-hold text-xl'>where in world</h1>
          <div className='ml-auto font medium'>
            <button onClick={() => toggleDarkMode()}>nnn</button>
          </div>
        </div>
      </div>
        {/* <Cards /> */}
    </body>
  )
}

export default Home