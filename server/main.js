import _ from 'lodash';
import { helpers , image } from 'faker';
import {StaffCol} from '../imports/collections/staffCol';
import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
    if(!StaffCol.find({}).count()){
        _.times(2000 , () => {
            const {name , email , phone } = helpers.createCard();
            StaffCol.insert({
                name , email , phone ,
                avatar : image.avatar()
            });
        });
    }

    Meteor.publish('staffCol', (per_page) => StaffCol.find({}, {limit:per_page}));
});

