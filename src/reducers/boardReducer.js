import _ from 'lodash';
import { TYPES } from '../actions/board_actions';
import { initialAppState } from './initialAppState';
import { TYPES as LIST_TYPES }  from '../actions/list_actions';

const initialState = initialAppState.boards;

const addBoard = ( state, payload ) => {
    const { title , desc } = payload;
    if ( !title ) {
        throw new Error( 'You must pass valid properties' );
    }
    const id = Math.random().toString('36');
    const items = {pending: [], completed: []};
    const newBookmark = { id, title, desc, items };
    console.log(state);
    const newState = {...state, [id]: newBookmark};
    console.log('new state after adding a board', newState);
    return newState;
};

const deleteBoard = ( state, payload ) => {
    const {id} = payload;
    if( !id )
    {
        throw new Error( 'You must pass a id' );
    }
    let newState = {...state};
    delete newState[id];
    console.log('new state after deleting a board', newState);
    return newState;
};

const renameBoard = ( state, payload ) => {
    const {id, title} = payload;
    if( !id || !title )
    {
        throw new Error( 'You must pass valid properties' );
    }
    let updatedBucket = { ...state[id], title };
    let newState = {...state, [id]: {...updatedBucket}};
    console.log('new state after renaming a board', newState);
    return newState;
};

const addListItem = ( state, payload ) => {
    const { id, item } = payload;
    if( !id || !item )
    {
        throw new Error( 'You must pass a id' );
    }
    let board = { ...state[id] };
    console.log(id);
    let { pending } = board.items;
    console.log('pending', pending);
    pending = [ ...pending, item ];
    console.log('pending', pending);
    board.items={ ...board.items, pending };
    console.log(board.items)
    let newState = {...state, [id]: {...board}};
    return newState; 
};

const toggleItemCompleted = ( state, payload ) => {
    const { id, item, isCompleted } = payload;
    if( !id || !item )
    {
        throw new Error( 'You must pass a id' );
    }
    let board = { ...state[id] }
    if( !isCompleted )
    {
        const position = board.items.pending.findIndex((ele) => ele === item);
        board.items.pending.splice(position, 1);
        board.items.completed = [ ...board.items.completed, item ];
    }
    if( isCompleted )
    {
        const position = board.items.completed.findIndex((ele) => ele === item);
        board.items.completed.splice(position, 1);
        board.items.pending = [ ...board.items.pending, item ];
    }
    let newState = {...state, [id]: {...board}};
    return newState;
};

const deleteItem = (state, payload) => {
    const { id, item } = payload;
    console.log(id);
    console.log(item)
    if( !id || !item )
    {
        throw new Error( 'You must pass a id' );
    }
    let board = { ...state[id] };
    let position = board.items.pending.findIndex((ele) => ele === item);
    let newState;
    if( position !== -1 )
    {
        board.items.pending.splice(position, 1);
        newState = {...state, [id]: {...board}};
    }
    position = board.items.completed.findIndex((ele) => ele === item);
    if( position !== -1 )
    {
        board.items.completed.splice(position, 1);
        newState = {...state, [id]: {...board}};
    }
    return newState;
}

export default function boardReducer( state = initialState, action ) {
    const { payload } = action;

    if ( action.error ) {
        console.info( 'ERROR IN ACTION', action.error );
        return state;
    }

    switch ( action.type ) {
        case TYPES.ADD_BOARD: {
            return addBoard( state, payload );
        }
        case TYPES.DELETE_BOARD: {
            return deleteBoard( state, payload );
        }
        case TYPES.RENAME_BOARD: {
            return renameBoard( state, payload );
        }
        case LIST_TYPES.ADD_LIST_ITEM: {
            return addListItem( state, payload );
        }
        case LIST_TYPES.TOGGLE_ITEM_COMPLETED: {
            return toggleItemCompleted( state, payload );
        }
        case LIST_TYPES.DELETE_LIST_ITEM: {
            return deleteItem(state, payload);
        }
        default:
            return state;
    }
}