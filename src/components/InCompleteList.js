import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Button, FormControlLabel, Switch, Paper, TextField } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';

export class InCompleteList extends React.Component {

    state = {
        openModal: false,
        newTask: ''
    }

    handleChangeTask = e => {
        this.setState({newTask: e.target.value})
    }

    handleOpenModal = () => {
        this.setState({openModal: true})
    }

    handleCloseModal = () => {
        this.setState({openModal: false})
    }

    toggleChecked = (board_id,task_id, isCompleted) => {
        const { toggleItemCompleted } = this.props;
        toggleItemCompleted({board_id,task_id, isCompleted})
    };

    handleDeleteTask = (board_id,task_id) => {
        const {deleteListItem}=this.props;
        deleteListItem({board_id, task_id});
    }

    handleRenameTask = ( task_id ) => {
        const { renameListItem, boardID } = this.props;
        renameListItem({ board_id: boardID,task_id, newTask: this.state.newTask })
        this.handleCloseModal();
    }

    render() {
        const { boardID, boards } = this.props;
        const board = boards[boardID];
        const { tasks } = board;
        if(tasks.pending.length>0)
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Typography variant="h4" style={{ paddingLeft: '20px' }}>Pending Tasks</Typography>
                </Grid>
                <Grid item xs={12}>
                    <List>
                    {
                        tasks.pending.map((taskObj)=>
                                <ListItem key={taskObj.task_id}>
                                    <ListItemText>{taskObj.task}</ListItemText>
                                    <Button onClick={()=>this.handleDeleteTask(boardID, taskObj.task_id)} size="small" style={{marginRight: '20px'}}>
                                        Delete
                                    </Button>
                                    <Button size="small" color="primary" onClick={()=> this.handleOpenModal()} style={{marginRight: '20px'}}>
                                                    Rename
                                    </Button>
                                    <Modal
                                        aria-labelledby="simple-modal-title"
                                        aria-describedby="simple-modal-description"
                                        open={this.state.openModal}
                                        onClose={()=> this.handleCloseModal()}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                            timeout: 500,
                                        }}
                                    >
                                        <Fade in={this.state.openModal}>
                                            <Paper>
                                                <Grid container style={{padding: '20px 0px 20px 30px'}}>                                                            
                                                    <Grid item xs={12}>
                                                        <Typography variant="h6">
                                                            Rename the task
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            margin="normal"
                                                            label="New Title"
                                                            value={this.state.newTask}
                                                            onChange={this.handleChangeTask}
                                                            variant="outlined"
                                                        />
                                                        </Grid>
                                                            <Grid item xs={12}>
                                                                <Button type="submit" onClick={()=>this.handleRenameTask(taskObj.task_id)}>Submit</Button>
                                                            </Grid>
                                                        </Grid>
                                                        </Paper>
                                                    </Fade>
                                                </Modal>
                                    <FormControlLabel
                                        control={<Switch size="small" checked={false} onChange={()=>this.toggleChecked(boardID, taskObj.task_id, false)} />}
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