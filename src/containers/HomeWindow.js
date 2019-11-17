import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BoardActions from '../actions/board_actions';
import { Home } from '../components/Home';

function mapStateToProps( state ) {
    return {
        boards: state.boards
    };
}

function mapDispatchToProps( dispatch ) {
    const actions = {
        ...BoardActions
    };
    return bindActionCreators( actions, dispatch );
}

export const HomeWindow = connect(
    mapStateToProps,
    mapDispatchToProps
)( Home );