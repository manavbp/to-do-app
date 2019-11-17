import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Typography, TextField, Button, FormControlLabel, Switch } from '@material-ui/core';

export class ToDoList extends React.Component {
    
    state = {
        newBoardItem: '',
        checked: false
    }

    handleChangeItem = e => {
        this.setState({newBoardItem: e.target.value})
    }

    toggleChecked = (id,item, isCompleted) => {
        const { toggleItemCompleted } = this.props;
        toggleItemCompleted({id, item, isCompleted})
    };

    handleDeleteItem = (id,item) => {
        const {deleteListItem}=this.props;
        deleteListItem({id, item});
    }

    render() {
        const { match, boards, addListItem } = this.props;
        console.log(this.props);
        const { boardID } = match.params;
        const board = boards[boardID];
        const { items } = board;
        console.log(board);
        console.log(items);
        if (!board) {
            return <p>Board not found</p>;
        }
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Link to="/">Go Back</Link>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3">To Be Completed</Typography>
                    <ul>
                    {
                        items.pending.map((item)=>
                            <li>
                                {item}
                                <button onClick={()=>this.handleDeleteItem(boardID, item)}>
                                    Delete
                                </button>
                                <FormControlLabel
                                    control={<Switch size="small" checked={false} onChange={()=>this.toggleChecked(boardID, item, false)} />}
                                    label="Completed"
                                />
                            </li>)
                    }
                    </ul>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3">Completed</Typography>
                    <ul>
                    {
                        items.completed.map((item)=><li>
                            <strike>
                                {item}
                            </strike>
                            <button onClick={()=>this.handleDeleteItem(boardID, item)}>
                                    Delete
                            </button>
                            <FormControlLabel
                                    control={<Switch size="small" checked={true} onChange={()=>this.toggleChecked(boardID, item, true)} />}
                                    label="Completed"
                            />
                        </li>)
                    }
                    </ul>
                </Grid>
                <Grid item xs={12}>
                    <form onSubmit={()=>addListItem({id: board.id, item: this.state.newBoardItem})} noValidate autoComplete="off" id="newItem">
                        <TextField
                            id="outlined-basic"
                            value={this.state.newBoardItem}
                            onChange={this.handleChangeItem}
                            label="New Board Item"
                            margin="normal"
                            variant="outlined"
                        />
                    </form>
                    <Button type="submit" form="newItem" value="Submit">Submit</Button>
                </Grid>
            </Grid>
        );
    }
};