import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.mainMenuContainer}>
      <nav className={styles.mainMenu}>
        <input type="checkbox" name="" id="nav-toggle" />
        <div className={styles.hamburgerLines}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
        <ul className={styles.menuItems}>
          <li className={styles.closeItem}>
            <label
              htmlFor="nav-toggle"
              className={styles.closeBtn}
              aria-label="Close menu"
            >
              &times;
            </label>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="treatments">Treatments</NavLink>
          </li>
          <li>
            <NavLink to="blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="faqs">FAQs</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

//'https://codepen.io/alvarotrigo/pen/wvrzPWL'
