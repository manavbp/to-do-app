import {ToDoList} from '../components/ToDoList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ListActions from '../actions/list_actions';

function mapStateToProps( state ) {
    return {
        boards: state.boards
    };
}

function mapDispatchToProps( dispatch ) {
    const actions = {
        ...ListActions
    };
    return bindActionCreators( actions, dispatch );
}

export const ToDoWindow = connect(
    mapStateToProps,
    mapDispatchToProps
)( ToDoList );