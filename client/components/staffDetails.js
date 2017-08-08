import React from 'react';

const StaffDetails = ({ details }) => {
    console.log(details);
    const {name, email, phone , avatar} = details;

    return(
        <div>
            {name}
        </div>
    )
};

export default StaffDetails;