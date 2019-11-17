import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Button, FormControlLabel, Switch } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class CompletedList extends React.Component {

    toggleChecked = (id,item, isCompleted) => {
        const { toggleItemCompleted } = this.props;
        toggleItemCompleted({id, item, isCompleted})
    };

    handleDeleteItem = (id,item) => {
        const {deleteListItem}=this.props;
        deleteListItem({id, item});
    }

    render() {
        const { boards, boardID } = this.props;
        const board = boards[boardID];
        const { items } = board;
        if(items.completed.length>0)
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Typography variant="h4" style={{ paddingLeft: '20px' }}>Completed Tasks</Typography>
                </Grid>
                <Grid item xs={12}>
                    <List>
                    {
                        items.completed.map((item)=>
                                <ListItem>
                                    <ListItemText><strike>{item}</strike></ListItemText>
                                    <Button onClick={()=>this.handleDeleteItem(boardID, item)} size="small" style={{marginRight: '20px'}}>
                                        Delete
                                    </Button>
                                    <FormControlLabel
                                        control={<Switch size="small" checked={true} onChange={()=>this.toggleChecked(boardID, item, true)} />}
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