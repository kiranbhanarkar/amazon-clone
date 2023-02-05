import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './ContextProvider';

function Header() {
    const [{ cart }, dispatch] = useStateValue();
  return (
    <div className='header'>
       <Link to='/'>
        <img className='header-logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon' />
        </Link>
        <div className='header-search'>
            <input className='header-input' type='text' />
            <SearchIcon className="search-icon"/>
        </div>

        <div className='header-nav'>
            <div className='header-option'>
                <span className='header-option-line1'>Hello</span>
                <span className='header-option-line2'>Sign in</span>
            </div>

            <div className='header-option'>
                <span className='header-option-line1'>Returns</span>
                <span className='header-option-line2'>& Orders</span>
            </div>

            <div className='header-option'>
                <span className='header-option-line1'>Your</span>
                <span className='header-option-line2'>Prime</span>
            </div>

            <Link to='/cart'>
            <div className='basket'>
                <ShoppingCartIcon /> 
                <span className='header-option-line2 cart-count'>{cart?.length}</span>  
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header