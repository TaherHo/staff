import React from 'react';
import reactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import ContactList from './components/contactList';

const App = ()=> {
    return(<div>
        <ContactList/>
    </div>);
};

Meteor.startup( () => {
    reactDOM.render(<App/> , document.querySelector('.components-generator'));
});