import _ from 'lodash';
import Fetch_Posts from '../actions/index';
export default function(state = {}, action) {
    switch (action.type) {
        case Fetch_Posts:
            return _.mapKeys(action.payload.data, "id");
        case 'fetch_post':
            return {...state,[action.payload.data.id]:action.payload.data};
        case 'delete_post':
            return _.omit(state, action.payload)
        default:
            return state;
    }
}
