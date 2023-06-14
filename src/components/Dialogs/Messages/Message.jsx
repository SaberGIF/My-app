import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={`${s.message} ${s.circle}`}>
            {props.message}
        </div>
    )
}


export default Message;
