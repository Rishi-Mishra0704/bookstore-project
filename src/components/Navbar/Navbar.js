import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import classes from '../css/Navbar.module.css';

const Navbar = () => (
  <>
    <header className={classes.header}>
      <div className={classes['header-left']}>
        <h1 className={classes['Bookstore-CMS']}>Bookstore CMS</h1>
        <nav className={classes.nav}>
          <ul className={classes.ul}>
            <li className={classes.books}>
              <Link to="/">Books</Link>
            </li>
            <li className={classes.categories}>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={classes['header-right']}>
        <CgProfile className={classes.profile} />
      </div>
    </header>
  </>
);

export default Navbar;
