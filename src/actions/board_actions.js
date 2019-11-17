import { createActions } from 'redux-actions';

export const TYPES = {
    ADD_BOARD: 'ADD_BOARD',
    DELETE_BOARD: 'DELETE_BOARD',
    RENAME_BOARD: 'RENAME_BOARD'
};

export const {
    addBoard,
    deleteBoard,
    renameBoard
} = createActions(
    TYPES.ADD_BOARD,
    TYPES.DELETE_BOARD,
    TYPES.RENAME_BOARD
);