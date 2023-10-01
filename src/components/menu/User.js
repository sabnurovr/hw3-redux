import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserOneInfo } from '../../redux/actions';

const User = ({ userInfo }) => {
    const dispatch = useDispatch();
    const userOneInfo = useSelector(state => state.usersReducer.userOneInfo);

    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

    const toggleInfo = () => {
        if (!showAdditionalInfo) {
            dispatch(fetchUserOneInfo(userInfo.id));
        }
        setShowAdditionalInfo(!showAdditionalInfo);
    }

    return (
        <div>
            <br/>
            <ul>
                <li>id: {userInfo.id}</li>
                <li>name: {userInfo.name}</li>
                <li>email: {userInfo.email}</li>
                <br />
                <button onClick={toggleInfo}>
                    {showAdditionalInfo ? 'Hide Additional Info' : 'Get More'}
                </button>
                <br />
                {showAdditionalInfo && Object.keys(userOneInfo).length > 0 && (
                    <div>
                        <ul>
                            <li>Phone: {userOneInfo.phone}</li>
                            <li>Website: {userOneInfo.website}</li>
                            <p>Company:</p>
                            <li>name: {userOneInfo.company.name}</li>
                            <li>catchPhrase: {userOneInfo.company.catchPhrase}</li>
                            <li>bs: {userOneInfo.company.bs}</li>

                        </ul>
                    </div>
                )}
            </ul>
            <br/>
        </div>
    );
}

export default User;
