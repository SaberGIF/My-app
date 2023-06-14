import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) => {
  // let sidebarElements = props.friends.map(n => <Navbar friend={n.friend} />)
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to='/profile' className = { item => item.isActive ? s.active : s.item }>Profile</NavLink>
      </div>
      <div>
        <NavLink to='/users' className = { item => item.isActive ? s.active : s.item }>Users</NavLink>
      </div>
      <div>
        <NavLink to='/dialogs' className = { item => item.isActive ? s.active : s.item }>Messages</NavLink>
      </div>
      <div>
        <NavLink to='/news' className = { item => item.isActive ? s.active : s.item }>News</NavLink>
      </div>
      <div>
        <NavLink to='/music' className = { item => item.isActive ? s.active : s.item }>Music</NavLink>
      </div>
      <div>
        <NavLink to='/settings' className = { item => item.isActive ? s.active : s.item }>Settings</NavLink>
      </div>
      <div>
        {/* {sidebarElements} */}
      </div>
    </nav>
  );
};

export default Navbar;
