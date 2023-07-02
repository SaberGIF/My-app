import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e"></img>
      <div className={s.login}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
