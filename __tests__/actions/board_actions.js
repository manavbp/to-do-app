import * as boardAction from "../../src/actions/board_actions";

describe('LIST_ACTIONS', () => {
    it('should create an action to create a board', () => {
        const payload = {
            board_id: Math.random().toString( '36' ),
            title: 'New Board',
            description: 'New Board Description'
        }
        const expectedAction = {
            type: boardAction.TYPES.ADD_BOARD,
            payload
        }
        expect(boardAction.addBoard(payload)).toEqual(expectedAction)
    })

    it('should create an action to delete board', ()=> {
        const payload = {
            board_id: Math.random().toString( '36' )
            }
            const expectedAction = {
                type: boardAction.TYPES.DELETE_BOARD,
                payload
            }
            expect(boardAction.deleteBoard(payload)).toEqual(expectedAction)
    });

    it('should create an action to rename a board Title', ()=> {
        const payload = {
            board_id: Math.random().toString( '36' ),
            title: 'New Title'
            }
            const expectedAction = {
                type: boardAction.TYPES.RENAME_BOARD,
                payload
            }
            expect(boardAction.renameBoard(payload)).toEqual(expectedAction)
    });
});