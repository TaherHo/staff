import React from 'react';
import reactDOM from 'react-dom';

const App = () => {
    return(
        <div>from our app</div>
    )
};

Meteor.startup(() =>{
   reactDOM.render( <App/>, document.querySelector('.container'));
});