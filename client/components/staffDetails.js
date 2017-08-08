import React from 'react';

const StaffDetails = ({details}) => {
    const {name, email, phone, avatar} = details;

    return (
        <div className="thumbnail">
            <img src={avatar}/>
            <div className="caption">

            <h4>
                {name}
            </h4>
            </div>
            <ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone:{phone}</li>
            </ul>
        </div>
    )
};

export default StaffDetails;