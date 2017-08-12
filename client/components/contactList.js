import React from 'react';
import {ContactsCol} from '../../imports/contacts';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

const ContactList = (props) => {
    return(
        <div>
            {props.contacts.map((contact) => contact.name)}
        </div>
    );
};

export default createContainer(() =>{
     Meteor.subscribe( 'contactsCol',20 );
     return{ contacts : ContactsCol.find({}).fetch()}
    } , ContactList);