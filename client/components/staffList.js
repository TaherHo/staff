import React, {Component} from 'react';
import StaffDetails from './staffDetails';
import {createContainer} from 'react-meteor-data';
import {StaffCol} from '../../imports/collections/staffCol';

const PER_PAGE = 20;

class StaffList extends Component {
    componentWillMount(){
        this.page = 1;
    }
    loadMoreClickHandler() {
        Meteor.subscribe('staffCol', PER_PAGE*(this.page+1));
        this.page +=1;
    }

    render() {
        return (
            <div>
                <div className="staff-list">
                    {this.props.staffCol.map(person => <StaffDetails key={person._id} details={person}/>)}
                </div>
                <button onClick={this.loadMoreClickHandler.bind(this)} className="btn btn-large btn-primary">
                    Load more
                </button>
            </div>

        );
    }
}
;

export default createContainer(() => {
    Meteor.subscribe('staffCol', PER_PAGE);
    return {staffCol: StaffCol.find({}).fetch()};
}, StaffList);