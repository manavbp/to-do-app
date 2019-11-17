import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { BoardFrom } from "./BoardForm";
import { BoardList } from "./BoardList";

export class Home extends React.Component {
    render(){ 
        const { boards, addBoard, deleteBoard, renameBoard }= this.props;
        return(
            <Grid container justify="center" style={{ maxWidth: '600px', marginRight: 'auto', marginLeft: 'auto', marginTop:'50px'}}>
                <Paper>
                    <Grid item xs={12}>
                        <BoardFrom 
                            addBoard={addBoard}
                            boards={boards}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <BoardList deleteBoard={deleteBoard} renameBoard={renameBoard} boards={boards}/>
                    </Grid>
                </Paper>
            </Grid>
        );
    }
}