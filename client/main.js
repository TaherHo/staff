import React from 'react';
import reactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const App = ()=> {
    return(<div>
        hi
    </div>);
};

Meteor.startup( () => {
    reactDOM.render(<App/> , document.querySelector('.components-generator'));
});