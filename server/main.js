import {Meteor} from 'meteor/meteor';
import {ContactsCol} from './../imports/contacts';
import _ from 'lodash';
import {helpers, image} from 'faker';

const PER_PAGE= 20;

Meteor.startup(() => {
    if(!ContactsCol.find().count()){
        _.times(1000 , () => {
            const {name , phone , email } =  helpers.createCard();
            ContactsCol.insert({name , phone, email ,
            avatar: image.avatar()});
        });
    }

    Meteor.publish('contactsCol' , () => {
        return ContactsCol.find({}, {limit:20});
    })
});