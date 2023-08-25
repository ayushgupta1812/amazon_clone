import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }] = useStateValue();

  return (
    <nav className='header'>

        <Link to='/'>
            <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
        </Link>

        <div className='header_search'>
            <input type='text' placeholder='Search' className='header_searchBar' />
            <SearchIcon className='header_searchIcon' />
        </div>

        <div className='header_nav'>
            <Link to='/login' className='header_link'>
                <div className='header_option'>
                    <span className='header_option1'>Hello,Ayush</span>
                    <span className='header_option2'>Sign In</span>
                </div>
            </Link>

            <Link to='/' className='header_link'>
                <div className='header_option'>
                    <span className='header_option1'>Returns</span>
                    <span className='header_option2'>& Orders</span>
                </div>
            </Link>

            <Link to='/' className='header_link'>
                <div className='header_option'>
                    <span className='header_option1'>Your</span>
                    <span className='header_option2'>Prime</span>
                </div>
            </Link>

            <Link to='/checkout' className='header_link'>
                <div className='header_optionBasket'>
                    <ShoppingCartIcon />
                    <span className='header_option2 header_basket'>{basket?.length}</span>
                </div>
            </Link>
        </div>

    </nav>
  );
}

export default Header;