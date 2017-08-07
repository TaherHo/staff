import React from 'react';
import reactDOM from 'react-dom';
import StaffList from './components/staffList';

const App = () => {
    return(
        <div>
            <StaffList/>
        </div>
    )
};

Meteor.startup(() =>{
   reactDOM.render( <App/>, document.querySelector('.container'));
});