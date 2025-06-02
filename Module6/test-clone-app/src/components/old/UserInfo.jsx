

import Avatar from "./Avatar.jsx"; 

function UserInfo(props) {
    return (
        <div className="userInfo"> 
            <Avatar user={props.user} />
            <div className="userName">
                {props.user.name}        
            </div>    
        </div>

    );
}

export default UserInfo; 