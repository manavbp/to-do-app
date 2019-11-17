import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { Paper, Button } from '@material-ui/core';
import {ToDoForm} from './ToDoForm';
import {InCompleteList} from './InCompleteList';
import {CompletedList} from './CompletedList';


export class ToDoList extends React.Component {
    render() {
        const { match, boards, addListItem, deleteListItem, toggleItemCompleted, renameListItem } = this.props;
        const { boardID } = match.params;
        return (
            <Grid container justify="center" style={{ maxWidth: '600px', marginRight: 'auto', marginLeft: 'auto', marginTop:'50px'}}>
                <Paper>
                    <Grid item xs={12}>
                        <Button style={{marginLeft: '10px', marginTop: '20px'}}><Link to="/">Go Back</Link></Button>
                    </Grid>
                    <Grid item xs={12}>
                        <ToDoForm boardID={boardID} boards={boards} addListItem={addListItem} />
                    </Grid>
                    <Grid item xs={12}>
                        <InCompleteList deleteListItem={deleteListItem} boards={boards} boardID={boardID} toggleItemCompleted={toggleItemCompleted} renameListItem={renameListItem}/>
                    </Grid>
                    <Grid item xs={12}>
                        <CompletedList deleteListItem={deleteListItem} boards={boards} boardID={boardID} toggleItemCompleted={toggleItemCompleted} renameListItem={renameListItem}/>
                    </Grid>
                </Paper>
            </Grid>
        );
    }
};