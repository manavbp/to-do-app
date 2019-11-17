import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Button, FormControlLabel, Switch } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class CompletedList extends React.Component {

    toggleChecked = (board_id,task_id, isCompleted) => {
        const { toggleItemCompleted } = this.props;
        toggleItemCompleted({board_id,task_id, isCompleted})
    };

    handleDeleteTask = (board_id,task_id) => {
        const {deleteListItem}=this.props;
        deleteListItem({board_id,task_id});
    }

    render() {
        const { boards, boardID } = this.props;
        const board = boards[boardID];
        const { tasks } = board;
        if(tasks.completed.length>0)
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Typography variant="h4" style={{ paddingLeft: '20px' }}>Completed Tasks</Typography>
                </Grid>
                <Grid item xs={12}>
                    <List>
                    {
                        tasks.completed.map((taskObj)=>
                                <ListItem key={taskObj.task_id}>
                                    <ListItemText><strike>{taskObj.task}</strike></ListItemText>
                                    <Button onClick={()=>this.handleDeleteTask(boardID, taskObj.task_id)} size="small" style={{marginRight: '20px'}}>
                                        Delete
                                    </Button>
                                    <FormControlLabel
                                        control={<Switch size="small" checked={true} onChange={()=>this.toggleChecked(boardID, taskObj.task_id, true)} />}
                                    />
                                </ListItem>
                        )
                    }
                </List>
                </Grid>
            </Grid>
        );
        else
        return <div/>
    }
};