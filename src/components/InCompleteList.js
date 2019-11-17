import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Button, FormControlLabel, Switch } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class InCompleteList extends React.Component {

    toggleChecked = (id,item, isCompleted) => {
        const { toggleItemCompleted } = this.props;
        toggleItemCompleted({id, item, isCompleted})
    };

    handleDeleteItem = (id,item) => {
        const {deleteListItem}=this.props;
        deleteListItem({id, item});
    }

    render() {
        const { boardID, boards } = this.props;
        const board = boards[boardID];
        const { items } = board;
        if(items.pending.length>0)
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Typography variant="h4" style={{ paddingLeft: '20px' }}>Pending Tasks</Typography>
                </Grid>
                <Grid item xs={12}>
                    <List>
                    {
                        items.pending.map((item)=>
                                <ListItem>
                                    <ListItemText>{item}</ListItemText>
                                    <Button onClick={()=>this.handleDeleteItem(boardID, item)} size="small" style={{marginRight: '20px'}}>
                                        Delete
                                    </Button>
                                    <FormControlLabel
                                        control={<Switch size="small" checked={false} onChange={()=>this.toggleChecked(boardID, item, false)} />}
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