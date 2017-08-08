import React from 'react';
import StaffDetails from './staffDetails';
import {createContainer} from 'react-meteor-data';
import {StaffCol} from '../../imports/collections/staffCol';

const StaffList = (props) =>{
    console.log(props.staffCol);
    return(
        <div className="staff-list">
            {props.staffCol.map(person => <StaffDetails key={person._id} details={person}/>)}
        </div>
    );
};

export default createContainer(() =>{
    Meteor.subscribe('staffCol' , 20);
    return { staffCol:  StaffCol.find({}).fetch() };
},StaffList);