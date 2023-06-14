import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';



const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.avatarItem}>
            <img src='https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg'></img>
            <NavLink to={path} className={dialog => dialog.isActive ? s.active : s.dialog}>{props.name}</NavLink>
        </div>
    )

}


export default DialogItem;
