import React, { useState, useContext, useEffect, useRef } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Menu");
  const { getTotalCartAmount,token, setToken, food_list } = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")

  }
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchBoxRef = useRef(null);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (searchOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim() !== '') {
      const results = food_list.filter(food =>
        food.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='navbar'>
      <Link to='/' ><img src={assets.foodlogo2} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" onClick={toggleSearch} />
        <div className="navbar-search-icon">
          {searchOpen && (
            <div className="search-box" ref={searchBoxRef}>
              <input
                type="text"
                placeholder="Search food items..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {searchResults.length > 0 && (
                <ul className="search-results">
                  {searchResults.map((item) => (
                    <li key={item._id}>{item.name}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token?<button className='sign-in' onClick={() => setShowLogin(true)}>Sign in</button>:<div className='navbar-profile'>
          <img src={assets.profile_icon} alt=''/> 
          <ul className="nav-profile-dropdown">
            <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt='' />
            <p>Orders</p></li>
              <hr/>
            <li onClick={logout}> <img src={assets.logout_icon} /> 
            <p>Logout</p>
            </li>
          </ul>
          </div> }
        


      </div>
    </div>
  );
};

export default Navbar;
