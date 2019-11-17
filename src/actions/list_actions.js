import { createActions } from 'redux-actions';

export const TYPES = {
    ADD_LIST_ITEM: 'ADD_LIST_ITEM',
    TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED',
    DELETE_LIST_ITEM: 'DELETE_LIST_ITEM',
    RENAME_LIST_ITEM: 'RENAME_LIST_ITEM' 
};

export const {
    addListItem,
    toggleItemCompleted,
    deleteListItem,
    renameListItem
} = createActions(
    TYPES.ADD_LIST_ITEM,
    TYPES.TOGGLE_ITEM_COMPLETED,
    TYPES.DELETE_LIST_ITEM,
    TYPES.RENAME_LIST_ITEM
);