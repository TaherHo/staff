import _ from 'lodash';
import { helpers , image } from 'faker';
import {StaffCol} from '../imports/collections/staffCol';

Meteor.startup(() => {
    const {name , email , phone } = helpers.createCard();
    if(!StaffCol.find({}).count()){
        _.times(2000 , () => {
            StaffCol.insert({
                name , email , phone ,
                avatar : image.avatar
            });
        });
    }


});

