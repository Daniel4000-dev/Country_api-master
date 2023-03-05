import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThumbDetail from './ThumbDetail';
import { MyContext } from '../Pages/Home/Home';

function Cards() {

  const { countries, setCountries } = useContext(MyContext);
  return (
    <div className='container grid grid-cols-4 gap-16 mx-auto'>
      { countries.map( ( country, index ) => <Link to={{ pathname: 'details', state: country}} key={index}>
          <ThumbDetail
            title={country.name.common}
            image_url={country.flags}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
      </Link> )}
        <h4 className="px-20 py-20">hello world</h4>
    </div>
  )
}

export default Cards