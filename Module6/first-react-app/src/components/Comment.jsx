import UserInfo from "./UserInfo.jsx"; 
import FormattedDate from "./FormattedDate.jsx";

function Comment(props) {

    return (

        <div className="comment">
            <UserInfo user={props.author} /> 
            <div className="comment-text">
                {props.text}
            </div>
            <FormattedDate date={props.date} />
        </div> 
    ); 
}

export default Comment; 