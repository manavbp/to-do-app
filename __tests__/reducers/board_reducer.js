import boardReducer from '../../src/reducers/boardReducer';
import * as list_actions from '../../src/actions/list_actions';
import * as board_actions from '../../src/actions/board_actions';
import { initialAppState } from '../../src/reducers/initialAppState';

const initialState = initialAppState.boards;

describe('board reducer', ()=> {
    it('shoild return the initial state', ()=> {
        expect(boardReducer(undefined,{})).toEqual({})
    });

    it('should add a board', ()=> {
        const board_id = Math.random().toString( '36' );
        expect(boardReducer(initialState, {
            type: board_actions.TYPES.ADD_BOARD,
            payload: {
                title: 'Board Title',
                description: 'Board description',
                board_id
            }
        })).toEqual({
            [board_id]: {
                title: 'Board Title',
                description: 'Board description',
                board_id,
                tasks: {
                    pending: [],
                    completed: []
                }
            }
        })
    });

    it('should delete a board', ()=> {
        const board_id_1 = Math.random().toString( '36' );
        const board_id_2 = Math.random().toString( '36' );
        
        let state = {
            [board_id_1]: {
                title: 'Board Title 1',
                description: 'Board description 1',
                board_id: board_id_1,
                tasks: {
                    pending: [],
                    completed: []
                }
            },
            [board_id_2]: {
                title: 'Board Title 2',
                description: 'Board description 2',
                board_id: board_id_2,
                tasks: {
                    pending: [],
                    completed: []
                }
            }
        }

        expect(boardReducer(state, {
            type: board_actions.TYPES.DELETE_BOARD,
            payload: {
                board_id: board_id_1
            }
        })).toEqual({
            [board_id_2]: {
                title: 'Board Title 2',
                description: 'Board description 2',
                board_id: board_id_2,
                tasks: {
                    pending: [],
                    completed: []
                }
            }
        })
    });
    it('should rename a board', ()=> {
        const board_id = Math.random().toString( '36' );
        
        let state = {
            [board_id]: {
                title: 'Board Title 1',
                description: 'Board description 1',
                board_id: board_id,
                tasks: {
                    pending: [],
                    completed: []
                }
            }
        }

        expect(boardReducer(state, {
            type: board_actions.TYPES.RENAME_BOARD,
            payload: {
                board_id,
                title: 'New Board Title 2'
            }
        })).toEqual({
            [board_id]: {
                title: 'New Board Title 2',
                description: 'Board description 1',
                board_id,
                tasks: {
                    pending: [],
                    completed: []
                }
            }
        })
    });
    it('should add a task to a board', ()=> {
        const board_id = Math.random().toString( '36' );
        const task_id = Math.random().toString( '36' );
        let state = {
            [board_id]: {
                title: 'Board Title 1',
                description: 'Board description 1',
                board_id: board_id,
                tasks: {
                    pending: [],
                    completed: []
                }
            }
        }

        expect(boardReducer(state, {
            type: list_actions.TYPES.ADD_LIST_ITEM,
            payload: {
                board_id,
                task_id,
                task: 'cereal'
            }
        })).toEqual({
            [board_id]: {
                title: 'Board Title 1',
                description: 'Board description 1',
                board_id,
                tasks: {
                    pending: [{task_id, task: 'cereal'}],
                    completed: []
                }
            }
        })
    });
    it('should delete a task from board', ()=> {
        const board_id = Math.random().toString( '36' );
        const task_id_1 = Math.random().toString( '36' );
        const task_id_2 = Math.random().toString( '36' );

        let state = {
            [board_id]: {
                title: 'Board Title 1',
                description: 'Board description 1',
                board_id: board_id,
                tasks: {
                    pending: [{task_id: task_id_1, task: 'buy cereal'}, {task_id: task_id_2, task: 'buy Milk'}],
                    completed: []
                }
            }
        }

        expect(boardReducer(state, {
            type: list_actions.TYPES.DELETE_LIST_ITEM,
            payload: {
                board_id,
                task_id: task_id_1
            }
        })).toEqual({
            [board_id]: {
                title: 'Board Title 1',
                description: 'Board description 1',
                board_id,
                tasks: {
                    pending: [{task_id: task_id_2, task: 'buy Milk'}],
                    completed: []
                }
            }
        })
    });
    it('should rename a task from board', ()=> {
        const board_id = Math.random().toString( '36' );
        const task_id_1 = Math.random().toString( '36' );
        const task_id_2 = Math.random().toString( '36' );

        let state = {
            [board_id]: {
                title: 'Board Title 1',
                description: 'Board description 1',
                board_id: board_id,
                tasks: {
                    pending: [{task_id: task_id_1, task: 'buy cereal'}, {task_id: task_id_2, task: 'buy Milk'}],
                    completed: []
                }
            }
        }

        expect(boardReducer(state, {
            type: list_actions.TYPES.RENAME_LIST_ITEM,
            payload: {
                board_id,
                task_id: task_id_1,
                newTask: 'buy chocolates'
            }
        })).toEqual({
            [board_id]: {
                title: 'Board Title 1',
                description: 'Board description 1',
                board_id,
                tasks: {
                    pending: [{task_id: task_id_1, task: 'buy chocolates'}, {task_id: task_id_2, task: 'buy Milk'}],
                    completed: []
                }
            }
        })
    });
    it('should toggle a task from pending to completed in a board', ()=> {
        const board_id = Math.random().toString( '36' );
        const task_id_1 = Math.random().toString( '36' );
        const task_id_2 = Math.random().toString( '36' );

        let state = {
            [board_id]: {
                title: 'Board Title 1',
                description: 'Board description 1',
                board_id: board_id,
                tasks: {
                    pending: [{task_id: task_id_1, task: 'buy cereal'}, {task_id: task_id_2, task: 'buy Milk'}],
                    completed: []
                }
            }
        }

        expect(boardReducer(state, {
            type: list_actions.TYPES.TOGGLE_ITEM_COMPLETED,
            payload: {
                board_id,
                task_id: task_id_1
            }
        })).toEqual({
            [board_id]: {
                title: 'Board Title 1',
                description: 'Board description 1',
                board_id,
                tasks: {
                    pending: [{task_id: task_id_2, task: 'buy Milk'}],
                    completed: [{task_id: task_id_1, task: 'buy cereal'}]
                }
            }
        })
    });
});