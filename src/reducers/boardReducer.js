import _ from 'lodash';
import { TYPES } from '../actions/board_actions';
import { initialAppState } from './initialAppState';
import { TYPES as LIST_TYPES }  from '../actions/list_actions';

const initialState = initialAppState.boards;

const addBoard = ( state, payload ) => {
    const { title , description } = payload;
    if ( !title ) {
        throw new Error( 'You must pass valid properties' );
    }
    const board_id = Math.random().toString('36');
    const tasks = {pending: [], completed: []};
    const newBoard = { board_id, title, description, tasks };
    const newState = {...state, [board_id]: newBoard};
    return newState;
};

const deleteBoard = ( state, payload ) => {
    const {board_id} = payload;
    if( !board_id )
    {
        throw new Error( 'You must pass valid properties' );
    }
    let newState = {...state};
    delete newState[board_id];
    return newState;
};

const renameBoard = ( state, payload ) => {
    const {board_id, title} = payload;
    if( !board_id || !title )
    {
        throw new Error( 'You must pass valid properties' );
    }
    let updatedBoarded = { ...state[board_id], title };
    let newState = {...state, [board_id]: {...updatedBoarded}};
    return newState;
};

const addListItem = ( state, payload ) => {
    const { board_id, task } = payload;
    if( !board_id || !task )
    {
        throw new Error( 'You must pass valid properties' );
    }
    let board = { ...state[board_id] };
    let { pending } = board.tasks;
    const task_id = Math.random().toString('36');
    pending = [ ...pending, { task_id, task } ];
    board.tasks={ ...board.tasks, pending };
    let newState = {...state, [board_id]: {...board}};
    return newState; 
};

const toggleItemCompleted = ( state, payload ) => {
    const { board_id, task_id, isCompleted } = payload;
    if( !board_id || !task_id )
    {
        throw new Error( 'You must pass valid properties' );
    }
    let board = { ...state[board_id] }
    if( !isCompleted )
    {
        const position = board.tasks.pending.findIndex((obj) => obj.task_id === task_id);
        const taskObj = board.tasks.pending[position];
        console.log('position', position);
        console.log('taskObj', taskObj);
        board.tasks.completed = [ ...board.tasks.completed, {...taskObj} ];
        console.log('completed', board.tasks.completed);
        board.tasks.pending.splice(position, 1);
    }
    if( isCompleted )
    {
        const position = board.tasks.completed.findIndex((obj) => obj.task_id === task_id);
        const taskObj = board.tasks.completed[position];
        console.log('position', position);
        console.log('taskObj', taskObj);
        board.tasks.pending = [ ...board.tasks.pending, {...taskObj} ];
        console.log('pending', board.tasks.pending);
        board.tasks.completed.splice(position, 1);
    }
    let newState = {...state, [board_id]: {...board}};
    return newState;
};

const deleteItem = (state, payload) => {
    const { board_id, task_id } = payload;
    if( !board_id || !task_id )
    {
        throw new Error( 'You must pass valid properties' );
    }
    let board = { ...state[board_id] };
    let position = board.tasks.pending.findIndex((obj) => obj.task_id === task_id);
    let newState;
    if( position !== -1 )
    {
        board.tasks.pending.splice(position, 1);
        newState = {...state, [board_id]: {...board}};
    }
    position = board.tasks.completed.findIndex((obj) => obj.task_id === task_id);
    if( position !== -1 )
    {
        board.tasks.completed.splice(position, 1);
        newState = {...state, [board_id]: {...board}};
    }
    return newState;
};

const renameItem = (state, payload) => {
    const { board_id, task_id, newTask } = payload;
    if( !board_id || !task_id || !newTask )
    {
        throw new Error( 'You must pass valid properties' );
    }
    let board = { ...state[board_id] };
    let position = board.tasks.pending.findIndex((obj) => obj.task_id === task_id);
    let newState;
    if( position !== -1 )
    {
        board.tasks.pending[position] = { task_id, task: newTask }
        newState = {...state, [board_id]: {...board}};
    }
    position = board.tasks.completed.findIndex((obj) => obj.task_id === task_id);
    if( position !== -1 )
    {
        board.tasks.completed[position] = { task_id, task: newTask }
        newState = {...state, [board_id]: {...board}};
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
        case LIST_TYPES.RENAME_LIST_ITEM: {
            return renameItem(state, payload);
        }
        default:
            return state;
    }
}