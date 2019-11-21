import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FormLabel } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';

export class BoardFrom extends React.Component {

    state = {
        newBoardDesc: '',
        newBoardTitle: ''
    }

    handleChangeTitle = e => {
        this.setState({newBoardTitle: e.target.value})
    }

    handleChangeDesc = e => {
        this.setState({newBoardDesc: e.target.value})
    }

    handleAddBoard = ()=> {
        const { addBoard }= this.props;
        const { newBoardTitle, newBoardDesc } = this.state;
        addBoard({title: newBoardTitle, description: newBoardDesc});
    }

    render(){
        const {boards} = this.props;
        const boardIdArr = Object.keys(boards);
        const boardTitles = boardIdArr.map((board_id)=>{ return {title: `${boards[board_id].title}`}});
        console.log(boardTitles)
        return (
            <Grid container direction="row" alignContent="space-around" justify="center" style={{marginTop: '20px', marginBottom: '20px'}}>
                <Grid item xs={12}>
                    <Typography variant="h4" style={{marginLeft: '20px'}}>Add a New Board</Typography>
                </Grid>
                <Grid item xs={12} style={{paddingLeft: '20px', paddingRight: '20px', marginTop: '30px'}}>
                    <form onSubmit={()=> this.handleAddBoard()} noValidate autoComplete="off" id="newBoard">
                        <Typography>Enter a Board Title...</Typography>
                        <Autocomplete
                            id="combo-box-demo"
                                options={boardTitles}
                                getOptionLabel={option => option.title}
                                style={{ width: 300 }}
                                renderInput={params => (
                                    <TextField
                                        {...params}
                                        margin="normal"
                                        label="Title"
                                        value={this.state.newBoardTitle}
                                        onChange={this.handleChangeTitle}
                                        fullWidth
                                        variant="outlined"
                                    />
                                )}
                        />
                        
                        
                        
                        
                        
                        
                        <Typography>Enter a Board Desc...</Typography>
                        <TextField
                            value={this.state.newBoardDesc}
                            onChange={this.handleChangeDesc}
                            label="Board Desc"
                            margin="normal"
                            fullWidth
                            variant="outlined"
                        />
                    </form>
                    <Button type="submit" form="newBoard" value="Submit" >Submit</Button>
                </Grid>
            </Grid>
        );
    }
}