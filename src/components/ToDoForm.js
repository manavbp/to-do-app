import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Typography, TextField, Button, FormControlLabel, Switch } from '@material-ui/core';

export class ToDoForm extends React.Component {
    
    state = {
        newBoardTask: ''
    }

    handleChangeTask = e => {
        this.setState({newBoardTask: e.target.value})
    }

    handleAddTask = ()=> {
        const { addListItem, boardID } = this.props;
        addListItem({board_id: boardID, task: this.state.newBoardTask})
    }

    render() {
        return (
            <Grid container direction="row" alignContent="space-around" justify="center" style={{marginTop: '20px', marginBottom: '20px'}}>
                <Grid item xs={12}>
                    <Typography variant="h4" style={{marginLeft: '20px'}}>Add a To Do Item</Typography>
                </Grid>
                <Grid item xs={12} style={{paddingLeft: '20px', paddingRight: '20px', marginTop: '30px'}}>
                    <form onSubmit={()=> this.handleAddTask()} noValidate autoComplete="off" id="newTask">
                        <Typography>Enter a task to be done...</Typography>
                        <TextField
                            margin="normal"
                            label="Task"
                            value={this.state.newBoardTask}
                            onChange={this.handleChangeTask}
                            fullWidth
                            variant="outlined"
                        />
                    </form>
                    <Button type="submit" form="newTask" value="Submit" >Submit</Button>
                </Grid>
            </Grid>
        );
    }
};