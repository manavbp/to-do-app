
/*import { initialAppState } from './initialAppState';

const initialState = initialAppState.boards;

/*
const deleteListItem = ( state, payload ) => {
    const { id, item } = payload;
    if( !id || !item )
    {
        throw new Error( 'You must pass a id' );
    }
    let board = { ...state[id] }
    
};

const renameListItem = ( state, payload ) => {
    const { id, oldItem, newItem } = payload;
    if( !id || !oldItem || !newItem )
    {
        throw new Error( 'You must pass a id' );
    }
    let board = { ...state[id] }
    const position = board.items.findIndex((ele) => ele === oldItem);
    board.items.splice(position, 1, newItem);
    let newState = {...state, [id]: {...board}};
    return newState;
}


export default function listReducer( state = initialState, action ) {
    const { payload } = action;
    console.log('state', state);

    if ( action.error ) {
        console.info( 'ERROR IN ACTION', action.error );
        return state;
    }

    switch ( action.type ) {
        
        /*
        case TYPES.DELETE_LIST_ITEM: {
            return deleteListItem( state, payload );
        }
        case TYPES.RENAME_LIST_ITEM: {
            return renameListItem( state, payload );
        }
        default:
            return state;
    }
}
*/