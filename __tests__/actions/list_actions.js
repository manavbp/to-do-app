import * as listAction from "../../src/actions/list_actions";

describe('LIST_ACTIONS', () => {
    it('should create an action to add a todo/task to a board', () => {
      const payload = {
        board_id: Math.random().toString( '36' ),
        task: 'get Cereal'
        }
        const expectedAction = {
            type: listAction.TYPES.ADD_LIST_ITEM,
            payload
        }
        expect(listAction.addListItem(payload)).toEqual(expectedAction)
    })

    it('should create an action to delete a todo/task from a board', ()=> {
        const payload = {
            board_id: Math.random().toString( '36' ),
            task_id: Math.random().toString( '36' )
            }
            const expectedAction = {
                type: listAction.TYPES.DELETE_LIST_ITEM,
                payload
            }
            expect(listAction.deleteListItem(payload)).toEqual(expectedAction)
    });

    it('should create an action to toggle the state of a todo/task as completed or pending', ()=> {
        const payload = {
            board_id: Math.random().toString( '36' ),
            task_id: Math.random().toString( '36' )
            }
            const expectedAction = {
                type: listAction.TYPES.TOGGLE_ITEM_COMPLETED,
                payload
            }
            expect(listAction.toggleItemCompleted(payload)).toEqual(expectedAction)
    });

    it('should create an action to rename the state of a todo/task', ()=> {
        const payload = {
            board_id: Math.random().toString( '36' ),
            task_id: Math.random().toString( '36' )
            }
            const expectedAction = {
                type: listAction.TYPES.RENAME_LIST_ITEM,
                payload
            }
            expect(listAction.renameListItem(payload)).toEqual(expectedAction)
    });
});