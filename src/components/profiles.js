import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {

    return(
        <div>
            <Link to={`${props.match.url}/post`}>take me to /profile/post</Link>
        </div>
    );
}

export default Profile;