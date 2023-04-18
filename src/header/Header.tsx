import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (

    
<header>
    

    <div className='header'>
      
    <div className="container">
           <nav>
           
           <ul className='navbar'>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/calculator'}>Calculator</Link>
              </li>
             
            </ul>
           </nav>
            </div>
    </div>
</header>
  )
}

export default Header