import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Typography, TextField, Button, FormControlLabel, Switch } from '@material-ui/core';

export class ToDoForm extends React.Component {
    
    state = {
        newBoardItem: ''
    }

    handleChangeItem = e => {
        this.setState({newBoardItem: e.target.value})
    }

    handleAddItem = ()=> {
        const { addListItem, boardID } = this.props;
        addListItem({id: boardID, item: this.state.newBoardItem})
    }

    render() {
        return (
            <Grid container direction="row" alignContent="space-around" justify="center" style={{marginTop: '20px', marginBottom: '20px'}}>
                <Grid item xs={12}>
                    <Typography variant="h4" style={{marginLeft: '20px'}}>Add a To Do Item</Typography>
                </Grid>
                <Grid item xs={12} style={{paddingLeft: '20px', paddingRight: '20px', marginTop: '30px'}}>
                    <form onSubmit={()=> this.handleAddItem()} noValidate autoComplete="off" id="newTask">
                        <Typography>Enter a task to be done...</Typography>
                        <TextField
                            margin="normal"
                            label="Task"
                            value={this.state.newBoardItem}
                            onChange={this.handleChangeItem}
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