import React from 'react';

const StaffDetails = ({details}) => {
    console.log(details);
    const {name, email, phone, avatar} = details;

    return (
        <div className="thumbnail">
            <div>
                <img src={avatar}/>
            </div>
            <h3>
                {name}
            </h3>
        </div>
    )
};

export default StaffDetails;