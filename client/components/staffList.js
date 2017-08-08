import React from 'react';
import StaffDetails from './staffDetails';
import {createContainer} from 'react-meteor-data';
import {StaffCol} from '../../imports/collections/staffCol';

const StaffList = (props) =>{
    console.log(props.staffCol);
    return(
        <div>
            <StaffDetails/>
        </div>
    );
};

export default createContainer(() =>{
    Meteor.subscribe('staffCol' );
    return { staffCol:  StaffCol.find({}).fetch() };
},StaffList);