import _ from 'lodash';
import { helpers , image } from 'faker';
import {StaffCol} from '../imports/collections/staffCol';

Meteor.startup(() => {
    // StaffCol.remove({});
    if(!StaffCol.find({}).count()){
        _.times(2000 , () => {
            const {name , email , phone } = helpers.createCard();
            StaffCol.insert({
                name , email , phone ,
                avatar : image.avatar()
            });
        });
    }

    Meteor.publish('staffCol', () => StaffCol.find({}, {limit:20}));
});

